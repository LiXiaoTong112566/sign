/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 17:17:08
 * @LastEditTime: 2019-08-09 15:15:16
 * @LastEditors: Please set LastEditors
 */
import fly from "@/utils/request";

// 登陆接口
export let login = code=>{
    return fly.post('/user/code2session', {code});
  }

//解密数据

export let decrypt = code=>{
  return fly.post('/user/decrypt', code);
}

//更新手机号

export let updatePhone=code=>{
  return fly.post("/user/updatePhone",code);
}
