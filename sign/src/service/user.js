import fly from "@/utils/request";

// 登陆接口
export let login = code=>{
    return fly.post('/user/code2session', {code});
}

// 添加面试
export let addSign = params =>{
    return fly.post("/sign", params)
}

// 解密数据
export let decrypt = params =>{
    return fly.post("/user/decrypt", params)
}

//更新手机号
export let updatePhone = params =>{
    return fly.post("/user/updatePhone", params)
}

//获取面试列表
export let sign = params =>{
    return fly.get("/sign", params)
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
