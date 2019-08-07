<template>
    <div>
        <div class="address">
            <span>北京</span>
            <input type="text" v-model="site" @input="getaddress()">
        </div>
        <div class="addlist">
            <div class="list" v-for="item in search" :key="item.id">
                <span class="iconfont icon-zhifeiji"></span>
                <div>
                    <div>
                        {{item.title}}
                    </div>
                    <div class="detail">
                         {{item.address}} 
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex";

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
         site:""
        }
    },
    computed:{
       ...mapState ({
           search :state=>state.address.search
       })
    },
    methods:{
       ...mapActions({
           getSuggestion:"address/getSuggestion"
       }),
       getaddress(){
           this.getSuggestion(this.site)
       }
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