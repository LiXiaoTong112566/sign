import {decrypt,updatePhone} from "@/service";
// 模块所有的状态
const state = {
  warrant:null,
  openid:"",
  info:{}
}

// 模块内的同步改变
const mutations = {
  openidUpdate(state,payload){
      //console.log("payload--openid",payload)
      state.openid = payload;
  },
  changeinfo(state,payload){
      state.info = payload;
      state.warrant = true;
  }
}

// 模块内的异步改变
const actions = {
  async decrypt({commit},payload){
     let data = await decrypt(payload);
     //console.log("data...",data)
     if(data.code === 0){
       //更新手机号
        let phone= await updatePhone({phone:data.data.phoneNumber*1});
        console.log("phone****",phone)
        phone.code===0 ?commit("changeinfo",data.data) :""; 
     }
  },
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}