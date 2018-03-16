import axios from 'axios'
import store from '../store'
// import Cookie from 'js-cookie'

// const baseURL = 'http://mapi.1mifd.com'
const baseURL = 'http://47.97.113.61:8086'

const createAxios = function (opts) {
  opts = {
    ...opts,
    requestSuccesses: (opts.requestSuccesses || []).concat(async req => {
      // 请求参数处理 req.data
      store.commit('testStore', 'aaa')
      return req
    }),
    requestFails: (opts.requestFails || []).concat(err => {
      // 请求发出失败处理
      return err
    }),
    responseSuccesses: (opts.responseSuccesses || []).concat(res => {
      // 请求成功处理
      // const data = res.data
      return res
    }),
    responseFails: (opts.responseFails || []).concat(err => {
      // 请求失败处理
      if (err.response) {
        return {
          code: err.response.status,
          message: err.response.data
        }
      } else {
        return {
          message: err.message
        }
      }
    })
  }
  const instance = axios.create({
    baseURL: baseURL,
    timeout: opts.timeout || 60000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x- www-form-urlencoded'
    }
  })
  instance.interceptors.request.use(
    req => {
      // const token = Cookie.get('token')
      // if (token) {
      //   req.headers['X-AUTH-TOKEN'] = token
      // }
      return req
    },
    err => {
      return Promise.reject(err)
    }
  )
  instance.interceptors.response.use(
    res => {
      opts.responseSuccesses.forEach(f => (res = f(res)))
      return res
    },
    err => {
      opts.responseFails.forEach(f => (err = f(err)))
      return err
    }
  )
  return instance
}

// 实例axios
const callService = createAxios({})

// 封装请求方法
export const get = async (store, url, arg, options = {}) => {
  const res = await callService.get(url, {
    params: {...arg}
  })
  return res.data
}

export const post = async (store, url, arg, options = {}) => {
  const res = await callService.post(url, {...arg})
  return res.data
}

export const put = async (store, url, arg, options = {}) => {
  const res = await callService.put(url, {...arg})
  return res.data
}

export const patch = async (store, url, arg, options = {}) => {
  const res = await callService.patch(url, {...arg})
  return res.data
}

export const del = async (store, url, arg, options = {}) => {
  const res = await callService.delete(url, {
    params: {...arg}
  })
  return res.data
}
