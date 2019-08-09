import Vue from "vue";
import Vuex from "vuex";

//引入logger打印日志
import CreateLogger from "vuex/dist/logger";

//引入store子模块

import home from "./module/home";

import address from "./module/address";

import InterViewList from "./module/iterviewData"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    address,
    InterViewList
  },
  plugins: [CreateLogger()]
});
