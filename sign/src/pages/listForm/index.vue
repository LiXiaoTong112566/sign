<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 10:10:14
 * @LastEditTime: 2019-08-09 17:38:29
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
      <li>
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
          <switch  @change="switch1Change" />
        
        </view>
      </li>
    </ul>
    <div class="btns">
      <button style="background:blue">去打卡</button>
      <button style="background:#BE0000">放弃面试</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
const moment = require("moment");
export default {
  props: {},
  components: {},
  data() {
    return {
        checkFlag:false,
    };
  },
  computed: {
    ...mapState({
      detailData: state => state.InterViewList.detailData
    }),
    //提醒状态的判断
    remind() {
      //detailData.remind==='-1'?'未提醒':detailData.remind==='0'?'已提醒':''
      if (this.detailData.remind === -1) {
        return "未提醒";
      } else if (this.detailData.remind === 0) {
        return "已提醒";
      }
    },
    //面试状态
    status() {
      //detailData.status==='-1'?'未开始':detailData.status===0?'已打卡':'已放弃'

      if (this.detailData.status === -1) {
        return "未开始";
      } else if (this.detailData.status === 0) {
        return "已打卡";
      } else {
        return "已放弃";
      }
    },
    time(){
        let dateTime=this.detailData.start_time;
        return this.formatTime(dateTime)
    }
  },
  methods: {
    ...mapActions({
      getDetailListData: "InterViewList/getInterViewDetailData"
    }),
    formatTime(time) {
      return moment(time * 1).format("YYYY-MM-DD HH:mm");
    },
      switch1Change: function(e) {
    console.log("switch1 发生 change 事件，携带值为", e.mp.detail.value);
    //true是选中
    //false是未选中
  }
  },
  created() {},
  mounted() {
     
  },
  onLoad(option) {
    console.log("接受的参数", option.id);
    this.getDetailListData(option.id);
  },
 
  
};
</script>
<style scoped >
.formList {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
}
.formList ul li {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  font-size: 15px;
}
li span {
  color: #ccc;
  padding-left: 5px;
}
.address input {
  height: 100%;
  margin-left: 10px;
}
.btns {
  display: flex;
  justify-content: space-between;
}
.btns button {
  display: inline-block;
  width: 150px;
  color: #fff;
  border-radius: 0;
  border: 0;
  margin-top: 50px;
}
</style>