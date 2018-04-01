<template>
  <div class="PanelCus">
    <div @click="advance(item.id)" class="panel-item" v-for="(item, index) in list" :key="index">
      <div class="img-wrap">
        <span style="font-size:20px;">Loading</span>
        <XImg 
          :delay="20"
          :src="item.image"
          :webp-src="`${item.image}?type=webp`"
          @on-success="success"
          @on-error="error"
          class="ximg-demo"
          error-class="ximg-error"
          :offset="-100"
          container="#vux_view_box_body">
        </XImg>
      </div>
      <div class="text">
        <p class="time">{{formatDate(item.createTime)}}</p>
        <p class="des">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import {XImg} from 'vux'
export default {
  components: {
    XImg
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('YYYY-MM-DD')
    },
    advance (id) {
      this.$router.push({
        path: '/dynamicdetail',
        query: {
          id: id
        }
      })
    },
    success (src, ele) {
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  }
}
</script>

<style lang="less" scoped>
// @remFac: 100;
// @remUIWidth: 640;
// @import "~less-rem/dist/rem";
.panel-item {
  // .px2rem_3(0, 0, 14px, padding);
  padding-bottom: 10px;
  .img {
    width: 100%;
  }
  .text {
    padding-left: 14px;
    .time {
      // .px2rem(20px);
      font-size: 12px;
      color: #ccc
    }
    .des {
      // .px2rem(24px)
      font-size: 14px;
    }
  }
  .ximg-demo {
    width: 100%;
    height: auto;
  }
  .ximg-error {
    background-color: yellow;
  }
  .ximg-error:after {
    content: '加载失败';
    color: red;
  }
}
</style>

