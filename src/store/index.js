import Vue from 'vue'
import Vuex from 'vuex'
import {createStore, preModule} from '../utils/preModule'
import {get, post, put, del} from '../utils/axiosProxy'

const opt = {
  state: {
    isLoading: false
  },
  mutations: {
    setLoading (state, val) {
      state.isLoading = val
    }
  },
  actions: {
    async get (ctx, {url, params}) {
      ctx.commit('setLoading', true)
      const res = await get(ctx, url, params)
      ctx.commit('setLoading', false)
      return res
    },
    async post (ctx, {url, params}) {
      ctx.commit('setLoading', true)
      const res = await post(ctx, url, params)
      ctx.commit('setLoading', false)
      return res
    },
    async put (ctx, {url, params}) {
      ctx.commit('setLoading', true)
      const res = await put(ctx, url, params)
      ctx.commit('setLoading', false)
      return res
    },
    async del (ctx, {url, params}) {
      ctx.commit('setLoading', true)
      const res = await del(ctx, url, params)
      ctx.commit('setLoading', false)
      return res
    }
  },
  modules: {
  }
}

export default createStore(Vue, Vuex, preModule(opt))
