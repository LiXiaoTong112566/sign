<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 10:10:14
 * @LastEditTime: 2019-08-12 00:11:46
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="formList">
    <ul>
      <li>
        <span>面试地址：</span>
        <input type="text" v-model="detailData.address" />
      </li>
      <li>
        <span>面试时间：</span>
        <input type="text" v-model="time" />
      </li>
      <li @click="callPhone">
        <span>联系方式：</span>
        <input type="text" v-model="detailData.phone" />
      </li>
      <li>
        <span>是否提醒：</span>
        <input type="text" v-model="remind" />
      </li>
      <li>
        <span>面试状态：</span>
        <input type="text" v-model="status" />
      </li>
      <li>
        <span>取消提醒：</span>
        <view class="body-view">
          <switch checked @change="switch1Change" v-if="flag" />
          <switch @change="switch1Change" v-else />
        </view>
      </li>
    </ul>
    <div  :class="detailData.status===1?'none':'btn'">
      <button style="background:blue">去打卡</button>
      <button style="background:#BE0000" @click="changeInterview">放弃面试</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
const moment = require("moment");
export default {
  props: {},
  components: {},
  data() {
    return {
      checkFlag: -1,
      id: "",
     
      
    };
  },
  computed: {
    ...mapState({
      detailData: state => state.InterViewList.detailData,
      flag: state => state.InterViewList.flag,
      phone:state=>state.user.phone,
      show:state=>state.InterViewList.show,
      

    }),
    //提醒状态的判断
    remind() {
      console.log("62行.......", this.detailData);
      if (this.detailData.remind == -1) {
        return "未提醒";
      } else if (this.detailData.remind == 0) {
        return "已提醒";
      } else {
        return "已取消提醒";
      }
    },
    //面试状态
    status() {
      if (this.detailData.status === -1) {
        return "未开始";
      } else if (this.detailData.status === 0) {
        return "已打卡";
      } else {
        return "已放弃";
      }
    },

    //时间的转换
    time() {
      let dateTime = this.detailData.start_time;
      return this.formatTime(dateTime);
    }
  },
  
  methods: {
    ...mapMutations({
       updataShow:"InterViewList/updataShow"

    }),
    ...mapActions({
      getDetailListData: "InterViewList/getInterViewDetailData",
      updataInterView: "InterViewList/updataInterView",
     
    }),
    //格式化日期
    formatTime(time) {
      return moment(time * 1).format("YYYY-MM-DD HH:mm");
    },
    //提醒状态的修改
    switch1Change: function(e) {
      console.log("switch1 发生 change 事件，携带值为", e.mp.detail.value);
      console.log("装态", this.detailData);
      // this.checkFlag=e.mp.detail.value;
      if (e.mp.detail.value) {
        this.updataInterView({
          id: this.detailData.id,
          remind: 1,
          status: this.detailData.status
        });
      } else {
        this.updataInterView({
          id: this.detailData.id,
          remind: -1,
          status: this.detailData.status
        });
      }
    },
    //放弃面试按钮触发的事件
    changeInterview() {
      this.updataInterView({ id: this.detailData.id, status: 1 });
      
      
    },
   callPhone(){
     console.log(123);
     wx.makePhoneCall({ phoneNumber: this.phone });
   
     

   }
  },
  created() {},
  mounted() {},
  
  onLoad(option) {
    console.log("接受的参数", option.id);
    this.getDetailListData(option.id);
  }
};
</script>
<style scoped >
.formList {
  width: 100%;
  box-sizing: border-box;
  padding: 0 20rpx;
}
.formList ul li {
  width: 100%;
  height: 130rpx;
  box-sizing: border-box;
  padding: 20rpx 0;
  border-bottom: 1px solid #eee;
  display: flex;
  font-size: 30rpx;
  padding: 30rpx 0;
}
li span {
  color: #ccc;
  padding-left: 10rpx;
}
.address input {
  height: 100%;
  margin-left: 20rpx;
}
.btns {
  display: flex;
  justify-content: space-between;
}
.btns button {
  display: inline-block;
  width: 300rpx;
  color: #333;
  border-radius: 0;
  border: 0;
  margin-top: 100rpx;
}

.none{
  display: none;
}
</style>