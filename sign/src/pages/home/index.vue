<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 10:10:14
 * @LastEditTime: 2019-08-10 11:19:21
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div class="homeBox">
    <div class="atlas">
      <map id="map" show-location :markers="markers" :longitude="longitude" :latitude="latitude"></map>
      <cover-view class="location" @click="location">
        <cover-view class="iconfont icon-dingwei"></cover-view>
      </cover-view>
       <navigator url="/pages/personal/main">
      <div class="mine iconfont icon-wode" @click="jumpMy"></div>
      </navigator>
    </div>
    <navigator url="/pages/addInterview/main">
      <div class="footer">添加面试</div>
    </navigator>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      markers: []
    };
  },
  computed: {
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    })
  },
  methods: {
    ...mapActions({
      location: "home/getLocation"
    })
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.homeBox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;

  button{
    border:none;
  }
  
  .atlas {
    width: 100%;
    flex: 1;

    map {
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .location {
      position: fixed;
      bottom: 130rpx;
      left: 60rpx;

      .icon-dingwei {
        color:blue;
        font-size: 80rpx;
       
        border:none;
      }
    }
  }

  .mine {
    position: absolute;
    right: 20rpx;
    bottom: 130rpx;
    color: lightskyblue;
    font-size: 52rpx;
    background:#000;

    border-radius: 50%;
    width: 100rpx;
    height: 100rpx;
    text-align: center;
    line-height: 100rpx;
  }

  navigator {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background: rgba(0, 0, 0, 0.9);
    color: #fff;
    z-index: 100;
  }
  .footer {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background: rgba(0, 0, 0, 0.9);
    color: #fff;
  }
}
</style>
