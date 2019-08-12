/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 10:29:51
 * @LastEditTime: 2019-08-12 09:50:38
 * @LastEditors: Please set LastEditors
 */
import {
  getInterViewDataService,
  getInterViewDetail,
  updataInterView
} from "@/service/";
const moment = require("moment");
//模块的所有的状态
const state = {
  active: 0,
  dataList: "",
  page: 1, //当前页的数据
  pageSize: 5, //当前页面显示的数据
  detailData: {},
  flag: "",
  hasMore: true, //是否有更多的数据
  show:true,
};

//模块内的同步的改变,改变数据的
const mutations = {
  //切换类型
  changeType(state, payload) {
    state.active = payload;
  },
  //获取到面试列表的所有的数据
  getListData(state, payload) {
    if (payload.length === state.pageSize * state.page) {
      state.hasMore = true;
    } else {
      state.hasMore = false;
    }
    console.log("当前数据的状态", state.hasMore);
    state.dataList = payload;
  },

  //修改显示和隐藏
  updataShow(state,payload){
    console.log("传过来的数据",payload);
    console.log("详情页的数据",state.detailData);
    state.detailData.show=payload.show;

  },

  //获取面试详情的数据

  getDetailData(state, payload) {
    state.detailData = payload;

    if (payload.remind === 1) {
      state.flag = true;
    } else {
      state.flag = false;
    }
    if(payload.show){
      state.show=true;
    }else{
      state.show=false;
    }
  },

  //页数的改变
  updatePage(state, payload) {
    state.page = payload.page;
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
      //如果点击的元素是全部
      if (state.active === 3) {
        console.log("全部页面的页数",params.page);
        console.log("quanbu",params.pageSize);
        result = await getInterViewDataService({
          page: params.page,
          pageSize: params.pageSize
        });
      } else {
        params.status = state.active - 1; //定义他的状态
        result = await getInterViewDataService(params);
      }
      //判断address的值是不是string格式的对象
      result.data.forEach(item => {
        item.start_time = formatTime(item.start_time);
        if (item.address.includes("{")) {
          item.address = JSON.parse(item.address);
          item.address = item.address.address;
        }
      });
      console.log("当前的页数", state.page);
      if (state.page === 1) {
        console.log("页数为1返回的数据", result.data);
        commit("getListData", result.data);
      } else {
        console.log("列表的数据",...state.dataList);
        console.log("新请求回来的数据",...result.data);
        console.log("合并后的数据", [...state.dataList, ...result.data]);
        commit("getListData", [...state.dataList, ...result.data]);
      }
      resolve();
    });
  },
  

  //获取面试详情的数据
  async getInterViewDetailData({ commit }, payload) {
    let data = await getInterViewDetail(payload);
    let newData = data.data;
  console.log(newData);
 
    //判断address的数据是不是对象
    if (newData.address.includes("{")) {
      newData.address = JSON.parse(newData.address);
      newData.address = newData.address.address;
    }
    if (data.code === 0) {
      commit("getDetailData", newData);
    }
  },

  //更新面试信息
  async updataInterView({ commit,dispatch }, payload) {
    let data = await updataInterView(payload);
    console.log("data状态",data);
    if(data.code===0){
      dispatch("getInterViewDetailData",payload.id)
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
