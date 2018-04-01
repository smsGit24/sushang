<template>
  <div class="detail">
    <div class="title">{{details.title}}</div>
    <div class="create">
      <span class="time">{{details.createTime}}</span><span class="user">{{details.user}}</span>
    </div>
    <div class="content" v-html="details.content"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      details: state => state.news.newsDetails
    })
  },
  async mounted () {
    await this.$store.dispatch('news/fetchNewsDetails', {
      id: this.$route.query.id
    })
    console.log(this.details)
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
<style lang="less">
.detail {
  .content {
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
