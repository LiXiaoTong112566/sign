import {addSign} from "@/service/index"

//模块所有的状态
const state = {

}

//模块内的同步改变
const mutations = {
   
}

//模块内的异步改变
const actions = {
    async addInterview(state,payload){
        //console.log("传过来的值",payload);
        return new Promise(async (resolve, reject) => {
            let data = await addSign(payload);
            //console.log("请求返回的值", data);
            resolve(data);
          });
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}