<template>
  <div>
    <template v-if="!isWorking">
      <div>
      <b-container fluid class="sticky-top bg-blur">
        <h1>Releases</h1>
      </b-container>
      <template v-if="releases.length > 0">
        <b-container fluid class="pb-3">
          <featured-release :release="firstRelease"></featured-release>
        </b-container>
      </template>
    </div>
    <div>
      <template v-if="releases.length > 0">
        <div class="sticky-top"></div>
        <releases-list :releases-list="otherReleases"></releases-list>
      </template>
      <template v-else>
        No release was found or no internet connection.
      </template>
    </div>
    </template>
    <template v-else>
      <div class="p-5 d-flex justify-content-center">
        <b-spinner variant="primary" :style="{width: '3rem', height: '3rem'}"></b-spinner>
      </div>
    </template>
  </div>
</template>

<script>
  import FeaturedRelease from './releases/FeaturedRelease.vue'
  import ReleasesList from './releases/ReleasesList.vue'
  import api from '../api'

  export default {
    data() {
      return {
        releases: [],
        isWorking: false
      }
    },
    computed: {
      firstRelease() {
        return this.releases[0] || {}
      },
      otherReleases() {
        return this.releases.slice(1)
      }
    },
    mounted() {
      this.isWorking = true

      api.get.releases(50)
        .then(response => response.data).then(json => {
          this.releases = json.results
        })
        .finally(() => {
          this.isWorking = false
        })
    },
    components: {
      FeaturedRelease,
      ReleasesList
    }
  }

</script>
