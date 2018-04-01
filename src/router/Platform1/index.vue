<template>
  <div class="platform">
    <swiper ref="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in data" :key="index">
        <img class="bg" :src="item.bg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import img1 from './images/1.jpg'
import img2 from './images/2.jpeg'
import img3 from './images/3.jpeg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          index: 0
        }
      },
      data: [
        {bg: img1},
        {bg: img2},
        {bg: img3},
        {bg: img4},
        {bg: img5}
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.swiper.swiper
    }
  },
  methods: {
    callback () {
      console.log(1)
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="less" scoped>
.platform {
  height: 100%;
  .swiper-container {
    height: 100%;
    .swiper-slide {
      height: 100%;
      .bg {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>

