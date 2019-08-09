/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 09:11:02
 * @LastEditTime: 2019-08-09 16:46:20
 * @LastEditors: Please set LastEditors
 */
import fly from "@/utils/request";

// 添加面试的接口
export let addInterViewService = code=>{
    
    return fly.post('/sign', code);
  }

//获取面试列表的接口

export let getInterViewDataService = code=>{
  return fly.get('/sign', code)
}

//获取面试详情

export let getInterViewDetail= code=>{
  return fly.get(`/sign/${code}`);
}


