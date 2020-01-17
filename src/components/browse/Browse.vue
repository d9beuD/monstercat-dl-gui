<template>
  <div>
    <b-container fluid>
      <div class="d-flex justify-content-between align-items-center">
        <h1>Browse</h1>
        <div class="d-flex align-items-center">
          <template v-if="$route.path === '/browse/search'">
            <search-bar class="mr-2"></search-bar>
          </template>
          <router-link to="/browse/search" class="h4 mb-0">
            <fa-icon icon="search"></fa-icon>
          </router-link>
        </div>
      </div>
    </b-container>
    <router-view></router-view>
  </div>
</template>

<script>
import SearchBar from './search/SearchBar.vue'

export default {
  components: {
    SearchBar
  }
}
</script>
