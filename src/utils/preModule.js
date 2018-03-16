export function preModule (opt) {
  Object.keys(opt.modules).forEach(m => {
    if (opt.modules[m].pred) return
    let mutations = opt.modules[m].mutations
    Object.keys(mutations).forEach(mu => {
      mutations[m + '/' + mu] = mutations[mu]
      delete mutations[mu]
    })
    let actions = opt.modules[m].actions
    actions && Object.keys(actions).forEach(a => {
      actions[m + '/' + a] = actions[a]
      delete actions[a]
    })
    opt.modules[m].pred = true
  })
  return opt
}
export function createStore (Vue, Vuex, opt) {
  opt = opt || {}
  return function () {
    Vue.use(Vuex)
    return new Vuex.Store(opt)
  }
}
