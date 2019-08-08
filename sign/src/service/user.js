import fly from "@/utils/request";


// 登陆接口
export let login = code=>{
    return fly.post('/user/code2session', {code});
}

// 添加面试
export let addSign = params =>{
    console.log("add//",params)
    return fly.post("/sign", {params})
}