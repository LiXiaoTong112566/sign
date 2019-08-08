import QQMapWX from "@/utils/qqmap-wx-jssdk.min.js";
import { addInterViewService } from "@/service/";

// 实例化一下
const qqMapSdk = new QQMapWX({
  key: "UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I" // 必填
});

const state = {
  addressData: [], //获取到搜索列表的所有的数据
  checkAddress: "", //获取到选中的地址信息
  current: {
    company: "",
    phone: "",
    address: "",
    description: ""
  }
};
const actions = {
  //地址列表
  getSuggestion({ commit }, payload) {
    qqMapSdk.getSuggestion({
      keyword: payload,
      success: res => {
        commit("getAddress", res.data);
      }
    });
  },

  //添加面试列表
  async addInterview(state, payload) {
    console.log("传过来的值", payload);
    return new Promise(async (resolve, reject) => {
      let data = await addInterViewService(payload);
      console.log("请求返回的值", data);
      resolve(data);
    });
  }
};

const mutations = {
  //获取搜索页面的列表
  getAddress(state, data) {
    state.addressData = data;
  },
  //获取到点击的地址
  getCheckedAddress(state, data) {
    console.log("state....", state);
    console.log("data...", data);
    state.current.address = data.address;
    state.checkAddress = data;
  },

  //清空添加面试里面的数据
  updataModule(state, data) {
    state.current = { ...state.current, ...data };
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
