import fly from "@/utils/request";

// 添加面试的接口
export let addInterViewService = code=>{
    
    return fly.post('/sign', code);
  }

//获取面试列表的接口

export let getInterViewDataService = code=>{
  return fly.get('/sign', code)
}

