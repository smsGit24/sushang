// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'Vuex'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import axios from 'axios'
import App from './App'
import 'animate.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
// Vue.use(VueFullpage)
FastClick.attach(document.body)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  store,
  router,
  render: h => h(App)
})
