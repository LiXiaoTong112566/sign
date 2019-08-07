import QQMapWX from "@/utils/qqmap-wx-jssdk.min.js";

//实例化
const qqMapSdk = new QQMapWX ({
    key:"UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I"
});

const state = {
    search:[]
}

const actions = {
    getSuggestion({commit}, payload){
        qqMapSdk.getSuggestion({
          keyword: payload,
          success: res=>{
            console.log('address...', res);
            state.search=res.data
          }
        })
      }
}

const mutations = {
    
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}