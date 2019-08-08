<template>
  <div class="addInterviewBox">
    <div class="header">面试信息</div>

    <div class="main">
      <dl>
        <dt>公司名称</dt>
        <dd>
          <input type="text" placeholder="请输入公司名称" v-model="company" />
        </dd>
      </dl>
      <dl>
        <dt>公司电话</dt>
        <dd>
          <input type="text" placeholder="请输入面试联系人电话" v-model="tel" />
        </dd>
      </dl>
      <dl>
        <dt>面试时间</dt>
        <dd>
          <input type="text" placeholder="请输入面试时间" v-model="time"  />
          <icon type="info" size="20" color="blue" @click="showText()" />
        </dd>
      </dl>
      <dl>
        <dt>面试地址</dt>
        <dd>
          <navigator url="/pages/search/main">
            <input type="text" placeholder="请输入面试地址" :value="checkAddress" />
          </navigator>
        </dd>
      </dl>
    </div>

    <div class="noteBox">
      <div class="notetitle">备注信息</div>
      <div class="noteMain">
        <textarea name id cols="30" rows="10" placeholder="备注信息(可选，100个字以内)" v-model="textValue"></textarea>
      </div>
    </div>

    <button class="btn" @click="addFn()">确认</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      flag: false,
      company: "",
      tel: "",
      time: "2019-01-19",
      address: "",
      textValue: "",
      date: "2016-09-01"
    };
  },
  computed: {
    ...mapState({
      checkAddress: state => state.address.checkAddress
    })
  },
  methods: {
    //点击确认的时候显示的弹框
    addFn() {
      if (!this.company || !this.tel) {
        wx.showToast({
          title: "请输入内容",
          icon: "none",
          duration: 2000
        });
      } else if (!/^1[3456789]\d{9}$/.test(this.tel)) {
        wx.showToast({
          title: "请输入正确的手机号",
          icon: "none",
          duration: 2000
        });
      } else {
        const that = this;
        wx.showModal({
          title: "温馨提示",
          content: "添加面试成功",
          success(res) {
            if (res.confirm) {
              console.log("911111", that.checkAddress);
              console.log(that.tel,that.company,that.checkAddress,that.textValue)

              wx.navigateTo({
                url: "/pages/interviewIist/main"
              });
            }
          }
        });
      }
    },

    //显示时间的提示
    showText() {
      wx.showToast({
        title: "在面试前一个小时我们会通知你哦",
        icon: "none",
        duration: 2000
      });
    },

    bindDateChange: function(e) {
      console.log("picker发送选择改变，携带值为", e.detail.value);
      // this.setData({
      //   date: e.detail.value
      // })
    },
    // showPicker() {
    //   this.flag = !this.flag;
    // }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.addInterviewBox {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    padding-left: 5rpx;
    background: #ccc;
  }

  textarea {
    height: 260rpx;
    border: 1px solid #ccc;
    margin: 0 10rpx;
    padding: 10rpx 10rpx;
  }
}

.main {
  dl {
    width: 100%;
    display: flex;

    border-bottom: 1px solid #ccc;

    dt {
      padding: 30rpx 10rpx;
    }

    dd {
      padding: 30rpx 10rpx;
      input {
        position: absolute;
        z-index: 1;
      }
    }
    ._icon {
      position: absolute;
      right: 20rpx;
    }
  }
}

.noteBox {
  width: 100%;

  .noteMain {
    width: 100%;
    margin-top: 20rpx;
  }

  .notetitle {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    padding-left: 10rpx;
    background: #ccc;
  }
}

.btn {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  background: #ccc;
  text-align: center;
  margin-top: 30rpx;
  border-radius: 0;
}

.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  .maskBox {
    width: 80%;
    height: 260rpx;
    background: #fff;
    margin: 0 10%;
    z-index: 100;
    position: absolute;
    top: 35%;
    text-align: center;
    border-radius: 20rpx;

    h3 {
      width: 100%;
      height: 80rpx;
      line-height: 80rpx;
      font-size: 40rpx;
      font-weight: 600;
    }

    p {
      width: 100%;
      height: 80rpx;
      line-height: 80rpx;
    }
    div {
      height: 80rpx;
      line-height: 80rpx;
      color: cornflowerblue;
      border-top: 1px solid #ccc;
    }
  }
}
</style>