import { getInterViewDataService } from "@/service/";
const moment = require("moment");
//模块的所有的状态
const state = {
  active: 0,
  dataList: "",
  page:1,
  pageSize:10,

};

//模块内的同步的改变,改变数据的

const mutations = {
  //切换类型
  changeType(state, payload) {
    state.active = payload;
  },
  //获取到面试列表的所有的数据
  getListData(state, payload) {
    console.log("面试", payload);

    state.dataList = payload;
  }
};

//模块内的异步改变

const actions = {
  //获取面试列表的数据
  getList({ commit,state}, payload) {
    console.log("接受的值",payload);
   
    return new Promise(async (resolve, reject) => {
      let params = {};
      params.page=state.page;
      params.pageSize=state.pageSize;
      if(state.status!==3){
        params.status=state.active-1
        
      }

     let  result = await getInterViewDataService(params);
    
     
    
     console.log("32",result);
      result.data.forEach(item => {
        console.log(1)
        item.start_time = formatTime(item.start_time);
        console.log(2);
        // if(item.address.contains({)){
        //    item.address = JSON.parse(item.address);

        // }
        
      });

      console.log("修改后数据", result.data);
      commit("getListData", result.data);

      resolve();
    });
  }
};

function formatTime(time) {
  return moment(time * 1).format("YYYY-MM-DD HH:mm");
}

//抛出这些方法

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
