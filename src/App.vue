<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
// @remFac: 100;
// @remUIWidth: 640;
// @import "~less-rem/dist/rem";
@import '~vux/src/styles/reset.less';
html, body {
  height: 100%;
  background-color: #fbf9fe;
  // .px2rem(22px)
  font-size: 64.8%;
  #app {
    height: 100%
  }
}
</style>

