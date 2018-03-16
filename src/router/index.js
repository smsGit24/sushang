import Vue from 'vue'
import VueRouter from 'vue-router'

const Dynamic = () => import('./Dynamic')
const DynamicDetail = () => import('./DynamicDetail')
const Feedback = () => import('./Feedback')
const Aptitudes = () => import('./Aptitudes')
const Platform = () => import('./Platform')
// const Access = () => import('./Access')
// const Dynamic = () => import('./Dynamic')
// const NewDynamic = () => import('./NewDynamic')
// import Dynamic from './Dynamic'
// import DynamicDetail from './DynamicDetail'
// import Feedback from './Feedback'
// import Aptitudes from './Aptitudes'
// import Platform from './Platform'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dynamic',
    component: Dynamic,
    meta: {
      title: '公司动态'
    }
  },
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: Dynamic,
    meta: {
      title: '公司动态'
    }
  },
  {
    path: '/dynamicdetail',
    name: 'DynamicDetail',
    component: DynamicDetail,
    meta: {
      title: '动态详情'
    }
  },
  {
    path: '/aptitudes',
    name: 'Aptitudes',
    component: Aptitudes,
    meta: {
      title: '相关资质'
    }
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
    meta: {
      title: '意见反馈'
    }
  },
  {
    path: '/platform',
    name: 'Platform',
    component: Platform,
    meta: {
      title: '平台数据'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
