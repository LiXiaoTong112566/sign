/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 09:11:02
 * @LastEditTime: 2019-08-09 20:53:10
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

//更新面试信息

export let updataInterView= code=>{
  console.log(code);
  let newCode=Object.assign({},code);
  delete code.id;
  return fly.put(`/sign/${newCode.id}`,code);
}



