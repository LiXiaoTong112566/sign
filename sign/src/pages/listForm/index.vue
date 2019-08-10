<template>
    <div class="formList">
       <ul>
           <li>
               <span>面试地址：</span>
               <input type="text" value="北京市海淀区上地软件园南路57号">
           </li>
           <li>
               <span>面试时间：</span>
               <input type="text" value="2019-08-06 17:00">
           </li>
           <li>
               <span>联系方式：</span>
               <input type="text" value="15532568521">
           </li>
           <li>
               <span>是否提醒：</span>
               <div>未提醒</div>
           </li>
           <li>
               <span>面试状态：</span>
               <div>未开启</div>
           </li>
           <li>
               <span>取消提醒：</span>
               <span class="iconfont icon-kaiguanguan"></span>
           </li>
       </ul>
       <div class="btns">
           <button style="background:blue">去打卡</button>
           <button style="background:#BE0000">放弃面试</button>
       </div>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex";
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
        ...mapActions({
            getInterViewDetailData:"signList/getInterViewDetailData"
        }),
    },
    created(){

    },
    mounted(){
        console.log("props",this.props)
        this.getInterViewDetailData()
    }
}
</script>
<style scoped >
.formList{
    width:100%;
    box-sizing: border-box;
    padding:0 10px;
}
.formList ul li{
  width:100%;
  height:40px;
  box-sizing: border-box;
  padding:8px 0;
  border-bottom: 1px solid #eee;
  display:flex;
  font-size: 15px;
}
li .icon-kaiguanguan{
    line-height: 50rpx;
    font-size: 100rpx;
}
li span{
    color:#ccc;
    padding-left:5px;
}
.address input{
  height:100%;
  margin-left:10px;
}
.btns{
    display:flex;
    justify-content: space-between;
}
.btns button{
    display:inline-block;
    width:150px;
    color:#fff;
    border-radius: 0;
    border:0;
    margin-top:50px;
}
</style>