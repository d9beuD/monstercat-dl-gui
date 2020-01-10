<template>
  <div id="app">
    <mac-window-button-space></mac-window-button-space>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import MacWindowButtonSpace from './components/MacWindowButtonsSpace.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    MacWindowButtonSpace,
    Navbar
  },
  data () {
    return {
      test: 'test'
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
