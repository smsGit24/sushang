<template>
  <div>
    <PanelCus :list="data" :type="type"></PanelCus>
  </div>
</template>

<script>
import PanelCus from '@/components/PanelCus.vue'
import data from './data'
export default {
  components: {
    PanelCus
  },
  data () {
    return {
      type: '4',
      data: data
    }
  }
}
</script>

<style lang="less" scoped>

</style>

