<template>
    <div>
        <div class="address">
            <span>北京</span>
            <input type="text" value="北京八维">
        </div>
        <div class="addlist">
            <div class="list">
                <span class="iconfont icon-zhifeiji"></span>
                <div>
                    <div>
                      北京八维教育软工学院    
                    </div>
                    <div class="detail">
                        北京海淀区上地软件元南路57号
                    </div>
                </div>
            </div>
            <div class="list">
                <span class="iconfont icon-zhifeiji"></span>
                <div>
                    <div>
                      北京八维教育软工学院    
                    </div>
                    <div class="detail">
                        北京海淀区上地软件元南路57号
                    </div>
                </div>
            </div>
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
<style scoped lang="">
.address{
  width:100%;
  height:40px;
  box-sizing: border-box;
  padding:8px 20px;
  border-top:1px solid #eee;
  border-bottom: 1px solid #eee;
  display:flex;
}
.address span{
    padding-right:20px;
    border-right: 1px solid #eee;
}
.address input{
  height:100%;
  flex:1;
  margin-left:10px;
}
.list{
    width: 100%;
    height:50px;
    border-bottom: 1px solid #eee;
    display:flex;
}
.list>div{
    box-sizing: border-box;
    padding:5px 0;
}
.list>span{
    color:skyblue;
    line-height: 50px;
    display:inline-block;
    margin:0 20px;
}
.list .iconfont{
    font-size: 30px;
}
.list .detail{
    font-size: 13px;
    color:#ccc;
}
</style>