import Vue from "vue";
import Vuex from "vuex";
import CreateLogger from "vue-style-loader";

//引入store 子模块
import home from "./modules/home"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home
    },
    plugins: [
        CreateLogger()
    ]
})