
<template>
  <div class="homeBox">
    <div class="atlas">
      <map></map>
    </div>

    <div class="footer">
      添加考试
    </div>


  </div>
</template>
<script>
export default {
  props:{
    

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
*{
  padding:0;
  margin:0;

}

page{
  width: 100%;
  height: 100%;
}

.homeBox{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .atlas{
    width: 100%;
    flex:1;

    map{
      width: 100%;
      height: 100%;
    }
  }

  .footer{
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background: rgba(0,0,0,0.9);
    color:#fff;
    
  }



}

</style>
