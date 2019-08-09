import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import home from './modules/home';
import address from "./modules/address";
import addSign from "./modules/addSign";
import user from "./modules/user";
import signList from "./modules/signList";

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    home,
    address,
    addSign,
    user,
    signList
  },
  plugins: [CreateLogger()]
})