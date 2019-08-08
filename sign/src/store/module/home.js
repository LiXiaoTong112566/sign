//模块的所有的状态
const state = {
  longitude: "113.324520",
  latitude: "23.099994"
};

//模块内的同步的改变,改变数据的

const mutations = {
  //更改经度和纬度的变化
  updateLocation(state, payload) {
    state.longitude = payload.longitude;
    state.latitude = payload.latitude;
  }
};

//模块内的异步改变

const actions = {
  getLocation({ commit }, payload) {
    wx.getLocation({
      type: "wgs84",
      success(res) {
        console.log("res...", res);
        commit("updateLocation", res);
      }
    });
  }
};

//抛出这些方法

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
