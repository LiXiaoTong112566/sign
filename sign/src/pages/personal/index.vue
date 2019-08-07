<template>
    <div>
        <dl class="user">
            <dt class="iconfont icon-04f"></dt>
            <dd>175555</dd>
        </dl>
        <div class="uesrList"> 
            <!-- <navigator url="/pages/interviewlist/main"> -->
                <div @click="goto">
                    <i class="iconfont icon-shijian"></i>
                    <span class="subject">我的面试</span> 
                    <span>&gt;</span>
                </div>
            <!-- </navigator> -->
            <navigator url="/pages/assistant/main">
                <div>
                    <i class="iconfont icon-gantanhao1"></i>
                    <span class="subject">客服中心</span>
                    <span>&gt;</span>
                </div> 
            </navigator>
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
     goto(){
         const url = "/pages/interviewIist/main";
         mpvue.navigateTo({url})
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
</style>