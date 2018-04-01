<template>
  <div>
    <PanelCus :list="platNews.list"></PanelCus>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import PanelCus from '@/components/PanelCus.vue'
export default {
  components: {
    PanelCus
  },
  data () {
    return {
      start: 1,
      limit: 10
    }
  },
  computed: {
    ...mapState({
      platNews: state => state.news.platNews
    })
  },
  methods: {
    async fetchNews () {
      console.log(this);
      const {start, limit} = this
      await this.$store.dispatch('news/fetchPlatNews', { start, limit })
      console.log(this.platNews)
    }
  },
  async mounted () {
    await this.fetchNews()
  }
}
</script>

<style lang="less" scoped>

</style>

