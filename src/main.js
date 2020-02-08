import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './scss/custom.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
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
