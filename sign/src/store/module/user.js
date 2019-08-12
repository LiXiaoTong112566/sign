/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 11:01:05
 * @LastEditTime: 2019-08-11 21:07:39
 * @LastEditors: Please set LastEditors
 */
//模块的所有的状态
import { decrypt, updatePhone, fingerPrint } from "@/service/";
const state = {
  longitude: "113.324520",
  latitude: "23.099994",
  phone: ""
};

//模块内的同步的改变,改变数据的

const mutations = {
  getDectypt(state, payload) {
    console.log("payload", payload);
    state.phone = payload.phoneNumber;
  }
};

//模块内的异步改变
const actions = {
  //数据解密出手机号码
  async decrypt({ commit, state }, payload) {
    console.log(payload);
    let data = await decrypt(payload);
    commit("getDectypt", data.data);
    console.log("解密的数据", data);
    if (data.code === 0) {
      let updataPhone = await updatePhone({ phone: data.data.phoneNumber * 1 });
      // console.log("更新的手机号", updataPhone);
    }
  },

  //生物认证
  async authentication({ commit, state }, payload) {
    let data = await fingerPrint(payload);
    if (data.code === 0) {
      wx.showModal({
        title: "温馨提示",
        content: data.msg.is_ok
      });
    }
  }
};

//抛出这些方法

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
