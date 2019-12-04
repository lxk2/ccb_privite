import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible/flexible'
import http from './utils/http'
import utils from './utils/utils'
import config from './utils/config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import animate from 'animate.css'

import BackTop from './components/backTop'
import Price from './components/price'

import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.less'
Vue.use(Vant)
Vue.use(Lazyload, {
  lazyComponent: true
})

Vue.use(BackTop)
Vue.use(Price)
Vue.use(animate)

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Vue.prototype.$http = http
Vue.prototype.$utils = utils
Vue.prototype.$config = config

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
