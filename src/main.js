import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from './store'

import App from './App.vue'
import router from './router'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/bootstrap/dist/css/custom.min.css'
import './icons'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router,
  store,
  data: {
    monstercat: 'https://connect.monstercat.com'
  }
}).$mount('#app')
