<template>
  <div>
    <PanelCus :list="newsList.list"></PanelCus>
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
      newsList: state => state.news.news
    })
  },
  methods: {
    async fetchNews () {
      console.log(this);
      const {start, limit} = this
      await this.$store.dispatch('news/fetchNews', { start, limit })
      console.log(this.newsList)
    }
  },
  async mounted () {
    await this.fetchNews()
  }
}
</script>

<style lang="less" scoped>

</style>

