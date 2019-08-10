<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 10:10:14
 * @LastEditTime: 2019-08-09 23:52:00
 * @LastEditors: Please set LastEditors
 -->
<template>
  <form class="addInterviewBox" report-submit @submit="submit">
    <div class="header">面试信息</div>
    <div class="main">
      <dl>
        <dt>公司名称</dt>
        <dd>
          <input type="text" placeholder="请输入公司名称" v-model="current.company" />
        </dd>
      </dl>
      <dl>
        <dt>公司电话</dt>
        <dd>
          <input type="text" placeholder="请输入面试联系人电话" v-model="current.phone" />
        </dd>
      </dl>
      <dl>
        <dt>面试时间</dt>
        <dd>
          <picker
            mode="multiSelector"
            :range="dateRange"
            :value="info.date"
            @change="dateChange"
            @columnchange="columnChange"
          >
            <input type="text" placeholder="请输入面试时间" v-model="dateShow" />
          </picker>
          <icon type="info" size="20" color="blue" @click="showText()" />
        </dd>
      </dl>
      <dl>
        <dt>面试地址</dt>
        <dd>
          <input type="text" @tap="jumpSearch" placeholder="请输入面试地址" v-model="current.address" />
        </dd>
      </dl>
    </div>

    <div class="noteBox">
      <div class="notetitle">备注信息</div>
      <div class="noteMain">
        <textarea
          name
          id
          cols="30"
          rows="10"
          placeholder="备注信息(可选，100个字以内)"
          v-model="current.description"
        ></textarea>
      </div>
    </div>

    <button :class="btnAble?'btn':'btn disable'" form-type="submit">确认</button>
  </form>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
const moment = require("moment");

const range = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ],
  ["00分", "10分", "20分", "30分", "40分", "50分"]
];
export default {
  props: {},
  components: {},
  data() {
    return {
      info: {
        date: [0, 0, 0]
      }
    };
  },

  created() {
    // 如果当前时间是十一点之后，过滤掉今天
    if (moment().hour() == 23) {
      this.info.date = [1, 0, 0];
    }
  },
  computed: {
    ...mapState({
      current: state => state.address.current,
      checkAddress: state => state.address.checkAddress
    }),
    //判断确认的按钮是不是可以点击
    btnAble() {
      if (!this.current.company) {
        return false;
      }
      if (
        !this.current.phone ||
        !/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) ||
        !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)
      ) {
        return false;
      }
      if (!this.current.address) {
        return false;
      }

      return true;
    },

    // 处理面试日期
    dateRange() {
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]) {
        dateRange[1] = dateRange[1].filter(item => {
          return item > moment().hour();
        });
      } else {
        dateRange[1] = range[1];
      }
      // 格式化小时
      dateRange[1] = dateRange[1].map(item => {
        return item + "点";
      });
      // 计算当前日期之后的十天
      dateRange[0] = dateRange[0].map(item => {
        return (
          moment()
            .add(item, "days")
            .date() + "号"
        );
      });
      return dateRange;
    },

    // 显示的日期
    dateShow() {
      return moment()
        .add(
          moment().hour() == 23 ? this.info.date[0] - 1 : this.info.date[0],
          "d"
        )
        .add(this.info.date[1] + 1, "h")
        .minute(this.info.date[2] * 10)
        .format("YYYY-MM-DD HH:mm");
    }
  },
  methods: {
    ...mapActions({
      addInterview: "address/addInterview"
    }),

    ...mapMutations({
      upDataModule: "address/updataModule"
    }),

    //跳转到搜索的页面
    jumpSearch() {
      console.log(123);
      wx.navigateTo({ url: "/pages/search/main" });
    },

    // 监听多列选择器每列变化
    columnChange(e) {
      let { column, value } = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },

    //点击确认的时候
    async submit(e) {
      console.log("form表单提交", e);
      let formId = e.target.formId;
      console.log(e.target.formId); //获取到form_id
      //判断公司名称和电话号码是否为空
      if (!this.current.company || !this.current.phone) {
        wx.showToast({
          title: "请输入内容",
          icon: "none",
          duration: 2000
        });
        //校验电话号码和手机号码
      } else if (
        !/^1[3456789]\d{9}$/.test(this.current.phone) ||
        !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)
      ) {
        wx.showToast({
          title: "请输入正确的手机号",
          icon: "none",
          duration: 2000
        });
      } else {
        console.log("获取到表单的内容", this.current);
        let startTime = moment(this.dateShow).unix() * 1000;
        this.current.form_id = formId;
        this.current.start_time = startTime;
        this.current.latitude = this.checkAddress.location.lat;
        this.current.longitude = this.checkAddress.location.lng;
        console.log("向后台传的数据", this.current);
        let data = await this.addInterview(this.current);
        console.log("module返回的数据", data);
        if (data.code === 0) {
          wx.showModal({
            title: "温馨提示",
            content: data.msg,
            showCancel: false,
            success:res=>{
              if (res.confirm) {
                this.upDataModule({
                  company: "",
                  phone: "",
                  address: "",
                  description: ""
                });
                formId = "";
                wx.navigateTo({ url: "/pages/interviewIist/main" });
              }
            }
          });
        } else {
          wx.showModal({
            title: "温馨提示",
            content: data.msg
          });
        }
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

    //获取到日期的值
    bindDateChange: function(e) {
      console.log("picker发送选择改变，携带值为", e.mp.detail.value);
      this.time = e.mp.detail.value;
    },
    created() {}
  }
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



 if (!/^1[3456789]\d{9}$/.test(this.current.phone)|| !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)){
    wx.showToast({
          title: "请输入正确的手机号",
          icon: "none",
          duration: 2000
        });
 }
     