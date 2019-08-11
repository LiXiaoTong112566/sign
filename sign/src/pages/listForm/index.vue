<template>
    <div class="formList">
       <ul>
           <li>
               <span>面试地址：</span>
               <div>
                   {{detailData.address}}
               </div>
           </li>
           <li>
               <span>面试时间：</span>
               <div>
                   {{detailData.start_time}}
               </div>
           </li>
           <li>
               <span>联系方式：</span>
               <div>
                  {{detailData.phone}}
               </div>
           </li>
           <li>
               <span>是否提醒：</span>
               <div>{{detailData.remind?'未提醒':'已提醒'}}</div>
           </li>
           <li>
               <span>面试状态：</span>
               <div>{{detailData.status==-1?'未开始':detailData.status==0?'已打卡': '已放弃'}}</div>
           </li>
           <li>
               <span>取消提醒：</span>
                <switch :checked="detailData.remind===1" @change="cancelRemind" />
           </li>
       </ul>
       <div class="btns" v-if="detailData.status==-1 ">
           <button style="background:blue" @click="goPunch">去打卡</button>
           <button style="background:#BE0000" @click="giveInterview">放弃面试</button>
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
         ...mapState({
            detailData:state=>state.signList.detailData, 
        }),
       
    },
    methods:{
        ...mapActions({
            getInterViewDetailData:"signList/getInterViewDetailData",
            updataInterView:"signList/updataInterView"
        }),
        cancelRemind(e){
             //-1表示未提醒，0表示已提醒，1表示取消提醒
            // 取消提醒
            let id = this.detailData.id;
            console.log(id, e.target.value?1:-1)
            this.updataInterView({
                id,
                remind: e.target.value?1:-1
            })
        },
        goPunch(){
            console.log("打卡")
        },
        giveInterview(){
             wx.showModal({
                title: '温馨提示', //提示的标题,
                content: '确定要放弃本次面试吗?', //提示的内容,
                success: async res => {
                if (res.confirm) {
                    await this.updataInterView({
                        id: this.detailData.id,
                        status: 1
                    })
                }
                }
            });
        }
    },
    created(){

    },
    mounted(){
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
li div{
    flex:1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

li span{
    color:#ccc;
    padding-left:5px;
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