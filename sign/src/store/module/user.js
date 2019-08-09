/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 11:01:05
 * @LastEditTime: 2019-08-09 15:35:51
 * @LastEditors: Please set LastEditors
 */
//模块的所有的状态
import { decrypt, updatePhone } from "@/service/";
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
  async decrypt({ commit, state }, payload) {
    console.log(payload);
    let data = await decrypt(payload);
    commit("getDectypt", data.data);
    console.log("解密的数据", data);
    if (data.code === 0) {
      let updataPhone = await updatePhone({ phone: data.data.phoneNumber * 1 });
      // console.log("更新的手机号", updataPhone);
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
