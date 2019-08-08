import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';

// 实例化一下
const qqMapSdk = new QQMapWX({
  key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
});

const state={
    addressData:[],
    checkAddress:"",
}
const actions={
    getSuggestion({commit}, payload){
        qqMapSdk.getSuggestion({
          keyword: payload,
          success: res=>{
            commit("getAddress",res.data);
          }
        })
      }
}

const mutations={
  //获取搜索页面的列表
    getAddress(state,data){    
        state.addressData=data;
       
    },
//获取到点击的地址
    getCheckedAddress(state,data){
      console.log("state....",state);
      console.log("data...",data);
      state.checkAddress=data;


    }

   

}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
}