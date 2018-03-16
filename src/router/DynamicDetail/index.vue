<template>
  <div class="detail">
    <div class="title">{{data.title}}</div>
    <div class="create">
      <span class="time">{{formatDate(data.createOn)}}</span><span class="user">{{data.user}}</span>
    </div>
    <div class="content">{{data.content}}</div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      data: {
        title: '[总结与展望]苏商2018年工作报告暨表彰大会',
        createOn: 1519483445804,
        user: '苏商微服务',
        content: '苏商2018年工作报告暨表彰大会,苏商2018年工作报告暨表彰大会苏商2018年工作报告暨表彰大会,苏商2018年工作报告暨表彰大会苏商2018年工作报告暨表彰大会,苏商2018年工作报告暨表彰大会苏商2018年工作报告暨表彰大会,苏商2018年工作报告暨表彰大会苏商2018年工作报告暨表彰大会,苏商2018年工作报告暨表彰大会苏商2018年工作报告暨表彰大会,苏商2018年工作报告暨表彰大会苏商2018年工作报告暨表彰大会,苏商2018年工作报告暨表彰大会'
      }
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="less" scoped>
// @remFac: 100;
// @remUIWidth: 640;
// @import "~less-rem/dist/rem";
.detail {
  padding: 14px;
  .title {
    // .px2rem(26px);
    font-size: 16px;
  }
  .create {
    // .px2rem(14px, margin-bottom);
    margin-bottom: 10px;
    .time, .user {
      // .px2rem(20px);
      font-size: 12px;
      color: #ccc
    }
    .time {
      // .px2rem(10px, margin-right)
      margin-right: 6px;
    }
  }
  .content {
    // .px2rem(24px)
    font-size: 14px;
    text-indent: 2em;
  }
}
</style>

