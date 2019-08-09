<template>
    <div>
        <dl class="user">
            <dt class="iconfont icon-04f"></dt>
            <dd>{{info.phoneNumber}}</dd>
        </dl>
        <div class="uesrList"> 
           <!-- 跳页面方法一 -->
            <div @click="interview">
                <i class="iconfont icon-shijian"></i>
                <span class="subject">我的面试</span> 
                <span>&gt;</span>
            </div>
           <!-- 跳页面方法二 -->
            <navigator url="/pages/assistant/main">
                <div>
                    <i class="iconfont icon-gantanhao1"></i>
                    <span class="subject">客服中心</span>
                    <span>&gt;</span>
                </div> 
            </navigator>
        </div>
        <!-- 蒙层 -->
        <button 
            v-if="flag" 
            class="mongolia" 
            open-type="getPhoneNumber" 
            @getphonenumber="getPhoneNumber"
        ></button>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
           flag:true
        }
    },
    computed:{
        ...mapState({
              info :state=>state.user.info,
              warrant:state=>state.user.warrant
        }),
    },
    methods:{
        ...mapActions({
            decrypt:"user/decrypt"
        }),
        interview(){
            const url = "/pages/interviewIist/main";
            mpvue.navigateTo({url})
        },
        getPhoneNumber(e){
            let {encryptedData, iv,errMsg} = e.target;
            if(errMsg == "getPhoneNumber:ok"){
                //允许获取数据
                this.decrypt({
                    encryptedData,
                    iv
               }) 
              //  解除蒙层
               this.flag = false;
            }
         
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.user{
    width:100%;
    height:300rpx;
    background:#eee;
    text-align: center;
    dt{
        padding:20px;
    }
    .iconfont{
        font-size: 50px;
        color:blue;
    }
}
.uesrList div{
    width:100%;
    height:88rpx;
    line-height: 88rpx;
    box-sizing: border-box;
    padding:0 20px;
    border-bottom: 1px solid #eee;
    display:flex;
    justify-content: space-between;
    .iconfont{
        color:skyblue;
        font-size: 25px;
    }
    .subject{
        flex:1;
        text-indent: 20px;
    }
}
.mongolia{
    width:100%;
    height:100%;
    position: fixed;
    left:0;
    top:0;
    background:rgba(250,250,250,.5);
}
</style>