<template>
  <div class="addInterviewBox">
    <div class="header">面试信息</div>
    <form @submit="submit" report-submit>
        <div class="main">
          <dl>
            <dt>公司名称</dt>
            <dd>
              <input type="text" placeholder="请输入公司名称" v-model="company"/>
            </dd>
          </dl>
          <dl>
            <dt>公司电话</dt>
            <dd>
              <input type="text" placeholder="请输入面试联系人电话" v-model="tel"/>
            </dd>
          </dl>
          <dl>
            <dt>面试时间</dt>
            <dd class="distime">
              <picker
                  mode="multiSelector"
                  :range="dateRange"
                  :value="info.date"
                  @change="dateChange"
                  @columnchange="columnChange"
                ><view class="date">{{dateShow}}</view>
              </picker>
              <span class="iconfont icon-gantanhao1" @click="showTimeTip"></span>  
            </dd>
          </dl>
          <dl>
            <dt>面试地址</dt>
            <dd>
                <navigator url="/pages/search/main">
                  <span v-if="site.address" class="site">{{site.address}}</span>
                  <input v-else type="text" placeholder="请输入面试地址" />
                </navigator>
            </dd>
          </dl>
        </div>
        <div class="notetitle">备注信息</div>
        <textarea  placeholder="备注信息(可选，100个字以内)" v-model="remarks"></textarea>
        <button class="btn" form-type="submit">确认</button>
        <!-- <button class="btn" @click="addConfirm()">确认</button> -->
    </form>
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex";
import {addSign} from '@/service/';
const moment = require('moment');

const range = [
  [0,1,2,3,4,5,6,7,8,9],
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  ['00分','10分','20分','30分','40分','50分']
];
export default {
  props: {},
  components: {},
  data() {
    return {
      company:"",
      tel:"",
      remarks:"",
      info: {
        date: [0,0,0],
      }
    };
  },
  computed:{
       ...mapState ({
           site :state=>state.address.site
       }),
        // 处理面试日期
        dateRange(){
          let dateRange = [...range];
          // 如果时间是今天，过滤掉现在之前的小时
          if (!this.info.date[0]){
            dateRange[1] = dateRange[1].filter(item=>{
              return item>moment().hour();
            })
          }else{
            dateRange[1] = range[1]
          }
          // 格式化小时
          dateRange[1] = dateRange[1].map(item=>{
            return item+'点'
          })
          // 计算当前日期之后的十天
          dateRange[0] = dateRange[0].map(item=>{
            return moment().add(item, 'days').date()+'号'
          })
          return dateRange;
        },
       // 显示的日期
        dateShow(){
          return moment()
          .add(moment().hour()==23?this.info.date[0]-1:this.info.date[0], 'd')
          .add(this.info.date[1]+1, 'h')
          .minute(this.info.date[2]*10)
          .format('YYYY-MM-DD HH:mm');
        }
    },
  methods: {
    ...mapActions({
         addInterview:"addSign/addInterview"
    }),
    showTimeTip(){
      wx.showToast({
        title: '在面试前一个小时我们会通知你哦', //提示的内容,
        icon: 'none', //图标,
      });
    },
     // 监听多列选择器每列变化
    columnChange(e){
      let {column, value} = e.target;
      // console.log(column,value,"111111")
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },
    //获取数据传递数据
   async submit(e){
      var TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
     if(this.company == "" || this.tel == "" || this.site.length == 0){
        wx.showToast({
          title: '公司名称/地址/手机号不可为空',
          icon: 'none'
        })
     }else
     if(!TEL_REGEXP.test(this.tel)){
        wx.showToast({
          title: '请输入正确手机号',
          icon: 'none'
        })
     }else{
        //要传的数据
          let current = {
          company:this.company,//公司名称
          phone:this.tel, //电话
          form_id:e.target.formId,  //formid 表单的id
          address:this.site.address, //公司地址
          latitude:this.site.location.lat, // 经纬度
          longitude:this.site.location.lng, //经纬度
          start_time:moment(this.dateShow).unix()*1000, // 添加面试时间戳
          description:this.remarks // 备注信息
          };
        // 传入数据
           let data = await this.addInterview(current);
        //判断传如数据是否成功
            if(data.code === 0){
                wx.showModal({
                    title: '温馨提示',
                    content: '添加面试成功',
                    success: (res)=> {
                        if (res.confirm) {
                          const url =  "/pages/interviewIist/main";
                          mpvue.navigateTo({url})
                        } else if (res.cancel) {
                            console.log('用户点击取消')
                        }
                    }
                })
            }else{
              wx.showModal({
                title:"温馨提示",
                content:data.msg
              })
            }
     }
        
    }
  },
  created() {
     // 如果当前时间是十一点之后，过滤掉今天
    if (moment().hour() == 23){
      this.info.date = [1,0,0];
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.addInterviewBox {
  width: 100%;
  height: 100%;
  .header {
    height: 80rpx;
    line-height: 80rpx;
    padding-left: 10rpx;
    background: #eee;
  }
}

.main {
  dl {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    dt {
      padding: 30rpx 10rpx;
    }
    dd {
      padding: 30rpx 10rpx;
      input{
        position: absolute;
        z-index:1;
      }
      .site{
        font-size: 15px;
      }
    }
    .distime{
      position: relative;
      flex:1;
       .iconfont{
        position: absolute;
        right:15px;
        bottom: 20rpx;
        color:#197DBF;
        font-size: 25px;
      }
    }
  }
}

  .notetitle {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    padding-left: 10rpx;
    background: #eee;
    margin-bottom:30rpx;
  }
   textarea {
    width:95%;
    margin:0 auto;
    height: 260rpx;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 10rpx 10rpx;
  }

.btn {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  background: #eee;
  text-align: center;
  margin-top: 30rpx;
  border-radius: 0;
}

</style>