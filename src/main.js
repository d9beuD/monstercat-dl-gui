import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import Home from './components/Home.vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/bootstrap/dist/css/custom.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', component: Home }
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
