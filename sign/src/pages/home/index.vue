<template>
  <div class="mapimg">
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
       <div class="user"><img src="../../img/users.png" alt=""></div>
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
.mapimg{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
}
map{
  width:100%;
  flex:1;
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
.user{
   position: fixed;
   right:30rpx;
   bottom:100rpx;
   >img{
     display: inline-block;
     width:30px;
     height:30px;
   }
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

