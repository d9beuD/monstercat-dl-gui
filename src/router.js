import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Browse from './components/browse/Browse.vue'
import Search from './components/browse/search/Search.vue'
import CategorySelector from './components/browse/categories/CategorySelector.vue'
import Category from './components/browse/categories/Category.vue'
import Release from './components/releases/Release.vue'
import LastReleases from '@/components/LastReleases.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        name: 'home',
        component: LastReleases,
      },
      {
        path: 'release/:id',
        component: Release
      }
    ]
  },
  {
    path: '/browse',
    name: 'browse',
    component: Browse,
    children: [
      {
        path: '',
        component: CategorySelector
      },
      {
        path: 'category/:category',
        component: Category
      },
      {
        path: 'search',
        component: Search
      }
    ]
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
