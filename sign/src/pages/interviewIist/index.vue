<template>
  <div>
    <div class="header">
      <span 
        v-for="(item,index) in types" 
        :key="index"
        :class="active === index ?'active':''"
       @click="changeTitle(index)"
        >{{item}}</span>
    </div>

    <div class="main">
       <div v-if="interviewList.length">
        <div class="siteList" v-for="(file,index) in interviewList" :key="index"  @click="jumpDetail(file)">
           <p class="flex">
             <span>{{file.company}}</span>
             <span class="opens">{{file.status?file.status==1?'已放弃':'未开始':'已打卡'}}</span>
           </p>
           <div>
             <div class="address">{{file.address}}</div>
             <div class="flex">
               <span class="time">{{file.create_time}}</span>
               <span class="remind">{{file.remind?'未提醒':'已提醒'}}</span>
             </div>
           </div>
        </div>
      </div>
      <p v-else class="none">当前分类还没有面试!</p>
    </div>
  </div>
</template>
 <script>
 import {mapState,mapActions,mapMutations} from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      types:["未开始","已打卡","已放弃","全部"]
    };
  },
  computed: {
    ...mapState({
      active:state=>state.signList.active,
      interviewList:state=>state.signList.dataList,
    })
  },
  methods: {
    ...mapMutations({
      changeType:"signList/changeType"
    }),
    ...mapActions({
      getList:"signList/getList"
    }),
    changeTitle(ind){
      console.log(ind);
      this.changeType(ind);
       console.log('11',this.interviewList);
       this.getList(ind);
    },
    jumpDetail(item){
      console.log("跳转到页面",item.id);
      wx.navigateTo({
        url: `/pages/listForm/main?id=${item.id}`,
      })
    }

  },
  created() {},
  mounted() {
    this.getList()
  }

 };
 </script>
 <style scoped lang="scss">
.header{
  width: 100%;
  height:80rpx;
  line-height: 80rpx;
  border-top:1px solid #ccc;
  border-bottom: 5px solid #eee;
  display:flex;
  justify-content: space-around;
}
.active{
  color:skyblue;
  display: inline-block;
  height:100%;
  border-bottom: 1px solid skyblue;
}
.siteList{
  width:100%;
  height:200rpx;
  box-sizing: border-box;
  padding: 15rpx 25rpx;
  border-bottom: 2px solid khaki;
  .flex{
    width:100%;
    display:flex;
    justify-content: space-between;
    .opens{
      background: #eee;
      color:#666;
      padding:5px;
      font-size: 13px;
    }
    .remind{
      background:pink;
      color:palevioletred;
      padding:5px;
      font-size: 14px;
    }
  }
  .address{
    color:#ccc;
    font-size: 13px;
    margin:8px 0;
  }
  .time{
    color:#666;
    font-size: 14px;
  }
}
.none{
  padding: 100rpx 0;
  text-align: center;
  font-size: 30rpx;
  color: rgb(228, 77, 77);
}

 </style>