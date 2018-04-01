import moment from 'moment'
const news = {
  state: {
    news: {},
    platNews: {},
    newsDetails: {}
  },
  mutations: {
    setNews (state, val) {
      state.news = val
    },
    setPlatNews (state, val) {
      state.platNews = val
    },
    setNewsDetails (state, val) {
      state.newsDetails = val
    }
  },
  actions: {
    /**
     * @method fetchNews 获取公司动态列条
     * @param {any} start string 新闻id
     * @param {any} limit string 缩略图
     */
    async fetchNews (ctx, params) {
      const res = await ctx.dispatch('get', {url: '/news', params})
      const data = {
        count: res.count,
        list: res.list && res.list.filter(i => i.type === 1).map(item => ({
          ...item,
          image: 'http://47.97.113.61:8087/news/img/1f6ae74c529ffa.png',
          createTime: moment(item.createTime).format('YYYY-MM-DD HH:mm'),
          updateTime: moment(item.updateTime).format('YYYY-MM-DD HH:mm')
        }))
      }
      if (res) ctx.commit('news/setNews', data)
      else ctx.commit('news/setNews', false)
    },
    /**
     * @method fetchNews 获取公司动态列条
     * @param {any} start string 新闻id
     * @param {any} limit string 缩略图
     */
    async fetchPlatNews (ctx, params) {
      const res = await ctx.dispatch('get', {url: '/news', params})
      const data = {
        count: res.count,
        list: res.list && res.list.filter(i => i.type === 0).map(item => ({
          ...item,
          image: 'http://47.97.113.61:8087/news/img/1f6ae74c529ffa.png',
          createTime: moment(item.createTime).format('YYYY-MM-DD HH:mm'),
          updateTime: moment(item.updateTime).format('YYYY-MM-DD HH:mm')
        }))
      }
      if (res) ctx.commit('news/setPlatNews', data)
      else ctx.commit('news/setPlatNews', false)
    },
    /**
     * @method fetchNewsDetails 获取新闻详情
     * @param {any} id string 新闻id
     * @returns {
        "id": 1,
        "image": "1.png",
        "title": "测试1",
        "content": "测试1",
        "type": 1,
        "createTime": 1521988092000,
        "updateTime": 1521992147000
      }
     */
    async fetchNewsDetails (ctx, params) {
      const res = await ctx.dispatch('get', {url: `/news/${params.id}`})
      const data = res && {
        ...res,
        createTime: moment(res.createTime).format('YYYY-MM-DD HH:mm'),
        updateTime: moment(res.updateTime).format('YYYY-MM-DD HH:mm')
      }
      if (res) ctx.commit('news/setNewsDetails', data)
      else ctx.commit('news/setNewsDetails', false)
    }
  }
}

export default news
