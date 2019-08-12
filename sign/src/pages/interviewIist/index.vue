<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 10:10:14
 * @LastEditTime: 2019-08-12 10:01:41
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="InterviewListBox">
    <ul class="header">
      <li
        v-for="(item,index) in tabData"
        :key="index"
        :class="active===index?'act':''"
        @click="changeTitle(index)"
      >{{item}}</li>
    </ul>
    <div class="main" v-if="dataList.length">
      <div class="div">
        <div
          class="mainItem"
          v-for="(item,index) in dataList"
          :key="index"
          @click="jumpDetail(item)"
        >
          <div class="company">
            <h3>{{item.company}}</h3>
            <span>{{item.status===-1?"未开始":item.status===0?"已打卡":"已放弃"}}</span>
          </div>
          <div class="address">{{item.address}}</div>
          <div class="time">
            <p>{{item.start_time}}</p>
            <span>{{item.remind===-1?"未提醒":"已提醒"}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="none" v-else>当前分类还没有面试</div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      tabData: ["未开始", "已打卡", "已放弃", "全部"]
    };
  },
  computed: {
    ...mapState({
      active: state => state.InterViewList.active,
      dataList: state => state.InterViewList.dataList,
      page:state=>state.InterViewList.page,
      hasMore:state=>state.InterViewList.hasMore
    })
  },
  methods: {
    ...mapMutations({
      changeType: "InterViewList/changeType",
      updatePage:"InterViewList/updatePage",
    }),

    ...mapActions({
      getList: "InterViewList/getList"
    }),
    //切换主题
    changeTitle(ind) {  
      this.changeType(ind);
      this.getList(ind);
      this.updatePage({page:1});
     
    },
//跳转到详情页
    jumpDetail(item) {
      wx.navigateTo({
        url: `/pages/listForm/main?id=${item.id}`
      });
    }
  },
  created() {
    
    
  },
  mounted() {
    this.getList();
  },
  //上拉加载
  onReachBottom() {
    if (this.hasMore) {
      this.updatePage({ page: this.page + 1 });
      this.getList();
    }
  }
};
</script>
<style scoped lang="scss">
.InterviewListBox {
  width: 100%;
  height: 100%;
  background: #ccc;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  //overflow: hidden;
  .header {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    display: flex;
    background: #fff;
    li {
      flex: 1;
      text-align: center;
    }

    .act {
      color: cornflowerblue;
    }
  }

  .main {
    width: 98%;
    flex: 1;
    background: #fff;
    margin-top: 20rpx;
    padding: 0 1%;

    .mainItem {
      width: 100%;

      padding: 20rpx 0;
      border-bottom: 1px solid #ccc;

      .company {
        width: 100%;
        height: 100rpx;
        line-height: 100rpx;
        display: flex;
        justify-content: space-between;

        span {
          height: 40rpx;
          line-height: 40rpx;
          background: #eee;
          margin-right: 10rpx;
          margin-top: 10rpx;
          font-size: 28rpx;
          padding: 10rpx;
        }
      }

      .address {
        width: 100%;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .time {
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        display: flex;
        justify-content: space-between;
        color: rgba(0, 0, 0, 0.6);
        span {
          height: 40rpx;
          line-height: 40rpx;
          background: lightcoral;
          margin-top: 10rpx;
          margin-right: 10rpx;
          font-size: 28rpx;
          padding: 10rpx;
        }
      }
    }
  }
  .none {
    background: #eee;
    flex: 1;
    padding-top: 50rpx;
    text-align: center;
  }
}
</style>