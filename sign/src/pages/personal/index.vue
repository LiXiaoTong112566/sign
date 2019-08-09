<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 10:10:14
 * @LastEditTime: 2019-08-09 15:38:20
 * @LastEditors: Please set LastEditors

 -->
<template>
  <div class="myBox">
    <div class="headPortaitBox">
      <span class="iconfont icon-wode"></span>
      <div class="title">{{phone}}</div>
    </div>

    <div class="myBox_main">
      <ul class="list">
        <navigator url="/pages/interviewIist/main">
          <li>
            <p>
              <span class="iconfont icon-shijian"></span>
              <b>我的面试</b>
            </p>

            <span class="iconfont icon-jinru"></span>
          </li>
        </navigator>
        <navigator url="/pages/assistant/main">
          <li>
            <p>
              <span class="iconfont icon-shijian"></span>
              <b>客服中心</b>
            </p>
            <span class="iconfont icon-jinru"></span>
          </li>
        </navigator>
      </ul>
    </div>
    <button class="btn" open-type="getPhoneNumber" @getphonenumber="getphonenumber" v-if="flag"></button>
    <button v-if="showSetting" open-type="openSetting" class="set">前往设置的页面</button>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      showSetting: false,
      flag: true
    };
  },
  computed: {
    ...mapState({
      phone: state => state.user.phone
    })
  },
  methods: {
    ...mapActions({
      getDecrypt: "user/decrypt"
    }),
    getphonenumber(e) {
      console.log("获取手机号码", e);
      let encryptedData = e.target.encryptedData; //加密数据
      let iv = e.target.iv;
      if (encryptedData) {
        this.flag = false;
        this.showSetting = false;
        this.getDecrypt({
          encryptedData,
          iv
        });
      } else {
        this.flag = true;
        this.showSetting = true;
        wx.openSetting({ success: res => {} });
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.myBox {
  width: 100%;
  height: 100%;
  background: #eee;
  .headPortaitBox {
    width: 100%;
    height: 400rpx;
    padding-top: 100rpx;
    text-align: center;

    .icon-wode {
      font-size: 100rpx;
      text-align: center;
      color: blue;
      border: 1px solid #ccc;
      border-radius: 50%;
      padding: 10rpx 10rpx;
    }
    .title {
      margin-top: 30rpx;
    }
  }

  .list {
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;

    li {
      width: 100%;
      height: 100rpx;
      line-height: 100rpx;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;

      p {
        display: flex;
      }

      b {
        margin-left: 100rpx;
      }
      .icon-shijian {
        color: blue;
        font-size: 52rpx;
        padding-left: 20rpx;
      }

      .icon-jinru {
        display: block;
        margin-right: 50rpx;
      }
    }
  }

  .btn {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .set {
    width: 100%;
    height: 100rpx;
    background: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: 100rpx;
  }
}
</style>