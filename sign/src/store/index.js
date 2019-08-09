/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 14:47:08
 * @LastEditTime: 2019-08-09 11:20:43
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import Vuex from "vuex";

//引入logger打印日志
import CreateLogger from "vuex/dist/logger";

//引入store子模块

import home from "./module/home";

import address from "./module/address";

import InterViewList from "./module/iterviewData"
import user from "./module/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    address,
    InterViewList,
    user
  },
  plugins: [CreateLogger()]
});
