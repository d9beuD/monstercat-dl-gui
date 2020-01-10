import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'

import App from './App.vue'
import Home from './components/Home.vue'
import Release from './components/releases/Release.vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/bootstrap/dist/css/custom.min.css'
import './icons'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', component: Home },
  { path: '/release/:id', component: Release}
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
  data: {
    monstercat: 'https://connect.monstercat.com'
  }
}).$mount('#app')
