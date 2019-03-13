import Vue from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'

import './plugins/fontawesome'

import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GA_ID,
  router
})
