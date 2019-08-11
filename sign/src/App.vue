<script>
import {login} from '@/service/';
import {mapMutations} from "vuex";
import "@/fonts/iconfont.css";
export default {
  methods:{
     ...mapMutations({
       openidupdate :"user/openidUpdate"
     })
  },
  created () {
    wx.startSoterAuthentication({
      requestAuthModes: ["fingerPrint"], //启动指纹认证
      challenge: "123456", //这个参数api解释是因子。。反正没看懂，乱填的
      authContent: "请用指纹解锁", //提示框内容
      success: res => {
        this.finger({
          openid: this.openid,
          json_string: res.resultJSON,
          json_signature: res.resultJSONSignature
        });
      }
    });

    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    console.log("store...",this.$store)
     // 调用登陆接口
    wx.login({
      success: async (res)=>{
        if (res.code) {
          //发起网络请求
          let data = await login(res.code);
           console.log('res...', data);
           this.openidupdate(data.data.openid)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  } 
}
</script>

<style>

page, page>view{
  height: 100%;
}

</style>
