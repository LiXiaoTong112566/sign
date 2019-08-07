<template>
  <div>
    <map
      id="map"
      show-location
      :markers="markers"
      :longitude="longitude"
      :latitude="latitude"
    ></map>
    <cover-view class="location" @click="location">
       <button class="iconfont icon-dingwei"></button>
    </cover-view>
    <navigator url="/pages/personal/main">
       <div class="iconfont icon-04f"></div>
    </navigator>
    <navigator url="/pages/addInterview/main">
        <div class="footer">添加面试</div>
    </navigator>
   
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data(){
    return {
      markers: []
    }
  },
  computed: {
    ...mapState({
      longitude: state=>state.home.longitude,
      latitude: state=>state.home.latitude
    })
  },
  methods: {
    ...mapActions({
      location: 'home/getLocation'
    }),
   
  }
}
</script>

<style lang="scss" scoped>
map{
  width: 100%;
  height: 100%;
}
.location{
  position: fixed;
  bottom: 60rpx;
  left: 30rpx;
  border:none;
  button{
    border:none;
    outline: none;
    background:rgba(250, 250, 250, 0);
  }
  .iconfont{
    color:blue;
    font-size: 30px;
  }
}
.icon-04f{
   position: fixed;
   right:30rpx;
   bottom:100rpx;
   font-size: 30px;
   color:blue;
}
.footer{
   position: fixed;
   left:0;
   bottom: 0;
  width:100%;
  height:40px;
  line-height: 40px;
  background:#000;
  color:#fff;
  text-align: center;
}



</style>

