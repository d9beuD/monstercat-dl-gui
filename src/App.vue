<template>
  <div id="app">
    <mac-window-button-space></mac-window-button-space>
    <router-view></router-view>
  </div>
</template>

<script>
import MacWindowButtonSpace from './components/MacWindowButtonsSpace.vue'

export default {
  name: 'App',
  components: {
    MacWindowButtonSpace
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
