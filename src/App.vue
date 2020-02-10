<template>
  <div id="app">
    <b-row no-gutters>
      <b-col cols="auto" class="main-column main-navbar-column">
        <navbar></navbar>
      </b-col>
      <b-col class="main-column">
        <router-view></router-view>
      </b-col>
    </b-row>


  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
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
