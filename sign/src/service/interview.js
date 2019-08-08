import fly from "@/utils/request";

// 添加面试的接口
export let addInterViewService = code=>{
    console.log("jiekou1",code);
    console.log("jiekou2",{code})
    return fly.post('/sign', code);
  }

//获取面试列表的接口

export let getInterViewDataService = code=>{
  console.log(code);
  console.log({code})
  return fly.get('/sign', code);
}

