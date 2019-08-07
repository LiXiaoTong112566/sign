<template>
  <div class="InterviewListBox">
    <ul class="header">
      <li class="active">未开始</li>
      <li>已打卡</li>
      <li>已放弃</li>
      <li>全部</li>
    </ul>

    <div class="main">
      <div class="mainItem">
        <div class="company">
          <h3>北京八维研修学院</h3>
          <span>未开始</span>
        </div>
        <div class="address">北京市海淀区上地软件园南路57号</div>
        <div class="time">
          <p>面试时间:2019-08-06 17:00</p>
          <span>未提醒</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
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

    .active {
      color: cornflowerblue;
    }
  }

  .main {
    width: 100%;
    flex: 1;
    background: #fff;
    margin-top: 20rpx;

    .mainItem {
      width: 100%;
      height: 300rpx;

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
           font-size:28rpx;
           padding:10rpx;
           
        }
      }

      .address {
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        color:#ccc;
      }

      .time {
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        display: flex;
        justify-content: space-between;
        color:rgba(0,0,0,0.6);
        span {
          height: 40rpx;
          line-height: 40rpx;
          background: lightcoral;
          margin-top: 10rpx;
          margin-right: 10rpx;
          font-size:28rpx;
            padding:10rpx;
        }
      }
    }
  }
}
</style>