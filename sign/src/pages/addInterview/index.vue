<template>
  <div class="addInterviewBox">
    <div class="header">面试信息</div>

    <div class="main">
      <dl>
        <dt>公司名称</dt>
        <dd>
          <input type="text" placeholder="请输入公司名称" />
        </dd>
      </dl>
      <dl>
        <dt>公司电话</dt>
        <dd>
          <input type="text" placeholder="请输入面试联系人电话" />
        </dd>
      </dl>
      <dl>
        <dt>面试时间</dt>
        <dd>
          <input type="text" placeholder="2019-08-06 17:00" />
          <span class="iconfont icon-gantanhao1"></span>
        </dd>
      </dl>
      <dl>
        <dt>面试地址</dt>
        <dd>
            <navigator url="/pages/search/main">
                <input type="text" placeholder="请输入公司名称" />
            </navigator>
        </dd>
      </dl>
    </div>

    <div class="noteBox">
      <div class="notetitle">备注信息</div>
      <div class="noteMain">
        <textarea name id cols="30" rows="10" placeholder="备注信息(可选，100个字以内)"></textarea>
      </div>
    </div>

    <button class="btn">确认</button>

    <div class="mask">
      <div class="maskBox">
        <h3>温馨提示</h3>
        <p>添加面试成功</p>
        <div>确定</div>
      </div>
    </div>    

  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.addInterviewBox {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    padding-left: 5rpx;
    background: #ccc;
  }

  textarea {
    height: 260rpx;
    border: 1px solid #ccc;
    margin: 0 10rpx;
    padding: 10rpx 10rpx;
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
      .iconfont{
        position: absolute;
        right:15px;
        color:skyblue;
        font-size: 25px;
      }
    }
  }
}

.noteBox {
  width: 100%;

  .noteMain {
    width: 100%;
    margin-top: 20rpx;
  }

  .notetitle {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    padding-left: 10rpx;
    background: #ccc;
  }
}

.btn {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  background: #ccc;
  text-align: center;
  margin-top: 30rpx;
  border-radius: 0;
}

.mask{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  position: absolute;
  top:0;
  left:0;
  display: none;

  .maskBox{
    width: 80%;
    height: 260rpx;
    background: #fff;
    margin:0 10%;
    z-index:100;
    position: absolute;
    top:35%;
    text-align: center;
    border-radius: 20rpx;
    

    h3{
      width: 100%;
      height: 80rpx;
      line-height:80rpx;
      font-size:40rpx;
      font-weight: 600;


     
    }

     p{
        width: 100%;
       height: 80rpx;
       line-height: 80rpx;


      }
      div{
        height: 80rpx;
        line-height: 80rpx;
        color:cornflowerblue;
        border-top:1px solid #ccc;
      }
   

  }

}
</style>