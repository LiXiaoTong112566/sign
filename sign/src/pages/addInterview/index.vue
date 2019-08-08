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

      <div class="notetitle">备注信息</div>
      <textarea name id  placeholder="备注信息(可选，100个字以内)"></textarea>

    <button class="btn" @click="addConfirm()">确认</button>

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
  methods: {
    addConfirm(){
        wx.showModal({
          title: '温馨提示',
          content: '添加面试成功',
          success (res) {
            if (res.confirm) {
            console.log('用户点击确定')
            } else if (res.cancel) {
            console.log('用户点击取消')
            }
          }
        })
    }
  },
  created() {},
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
      .iconfont{
        position: absolute;
        right:15px;
        color:skyblue;
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