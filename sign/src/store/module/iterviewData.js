/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 10:29:51
 * @LastEditTime: 2019-08-09 16:59:33
 * @LastEditors: Please set LastEditors
 */
import { getInterViewDataService, getInterViewDetail } from "@/service/";
const moment = require("moment");
//模块的所有的状态
const state = {
  active: 0,
  dataList: "",
  page: 1,
  pageSize: 10,
  detailData:{
    
  }
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
  },
  //获取面试详情的数据

  getDetailData(state,payload){

    state.detailData=payload;

  }
};

//模块内的异步改变

const actions = {
  //获取面试列表的数据
  getList({ commit, state }, payload) {
    return new Promise(async (resolve, reject) => {
      let params = {};
      let result;
      params.page = state.page;
      params.pageSize = state.pageSize;
      if (state.active === 3) {
        result = await getInterViewDataService({
          page: params.page,
          pageSize: params.pageSize
        });
      } else {
        params.status = state.active - 1;
        result = await getInterViewDataService(params);
      }
      console.log("32", result);
      result.data.forEach(item => {
        item.start_time = formatTime(item.start_time);
        if (item.address.includes("{")) {
          item.address = JSON.parse(item.address);
          console.log("获取的地址", item.address);
          item.address = item.address.address;
        }
      });
      console.log("修改后数据", result.data);
      commit("getListData", result.data);
      resolve();
    });
  },


//获取面试详情的数据
 async getInterViewDetailData({commit},payload){
   console.log("获取面试详情",payload);

   let data= await  getInterViewDetail(payload);
   console.log("获取面试详情的数据",data);
   if(data.code===0){
    commit("getDetailData",data.data);

   }

   
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
