import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Browse from './components/browse/Browse.vue'
import Search from './components/browse/search/Search.vue'
import CategorySelector from './components/browse/categories/CategorySelector.vue'
import Release from './components/releases/Release.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/browse',
    component: Browse,
    children: [
      {
        path: 'category/:category',
        component: CategorySelector
      },
      {
        path: 'search',
        component: Search
      }
    ]
  },
  {
    path: '/release/:id',
    component: Release
  }
]

export default new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})
