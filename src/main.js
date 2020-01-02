import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import Home from './components/Home.vue'
import Release from './components/releases/Release.vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/bootstrap/dist/css/custom.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faDownload, faChevronLeft)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.component('fa-icon', FontAwesomeIcon)

const routes = [
  { path: '/', component: Home },
  { path: '/release/:id', component: Release}
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  data: {
    monstercat: 'https://connect.monstercat.com'
  }
}).$mount('#app')
