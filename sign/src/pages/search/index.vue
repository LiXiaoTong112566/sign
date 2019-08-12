<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 10:10:14
 * @LastEditTime: 2019-08-10 09:04:19
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <div class="address">
      <span>北京</span>
      <input type="text" v-model="addressValue" @input="changeFn()" placeholder="请输入公司名称" />
    </div>
    <div class="addlist">
      <div
        class="list"
        v-for="(item,index) in getAddress"
        :key="item.id"
        @click="getItemData(item)"
      >
        <span class="iconfont icon-feiji"></span>
        <div class="content">
          <div class="title">{{item.title}}</div>
          <div class="detail">{{item.address}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import {throttle} from "@/utils/throttle";
export default {
  props: {},
  components: {},
  data() {
    return {
      addressValue: ""
    };
  },
  computed: {
    ...mapState({
      getAddress: state => state.address.addressData
    })
  },
  methods: {
    ...mapActions({
      getSuggestion: "address/getSuggestion"
    }),

    ...mapMutations({
      getCheckedAddress: "address/getCheckedAddress"
    }),
    changeFn() {
      //搜索的内容
      console.log("搜索的内容",this.addressValue);
      this.getSuggestion(this.addressValue);
    },
    //点击把点击的地址传过去
    getItemData(data) {
      console.log(data);
      this.getCheckedAddress(data);
      wx.navigateBack({
        delta: 1
      });
    }
  },
  created() {},
  mounted() {
    console.log(throttle);
    this.getSuggestion=throttle(this.getSuggestion,2000)

  }
};
</script>
<style scoped lang="">
.address {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 8px 20px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
}
.address span {
  padding-right: 20px;
  border-right: 1px solid #eee;
}
.address input {
  height: 100%;
  flex: 1;
  margin-left: 10px;
}
.list {
  width: 100%;
  
  border-bottom: 1px solid #eee;
  display: flex;
}
.list > div {
  box-sizing: border-box;
  padding: 5px 0;
}
.list > span {
  color: skyblue;
  
  display: inline-block;
  margin: 30rpx 20rpx;
  font-size: 52rpx;
}

.title{
  padding:10rpx 0;
}
.list .detail {
  padding:6rpx 0;
  font-size: 13px;
  color: #ccc;
}
</style>