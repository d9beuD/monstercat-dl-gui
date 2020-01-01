<template>
  <div>
    <b-container fluid class="sticky-top bg-white">
      <h1>Releases</h1>
    </b-container>
    <b-container fluid>
      <template v-if="releases.length > 0">
        <featured-release :release="firstRelease"></featured-release>
        <releases-list :releases-list="otherReleases"></releases-list>
      </template>
      <template v-else>
        No release was found or no internet connection.
      </template>
    </b-container>
  </div>
</template>

<script>
  import FeaturedRelease from './releases/FeaturedRelease.vue'
  import ReleasesList from './releases/ReleasesList.vue'

  export default {
    data() {
      return {
        releases: []
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
      fetch(this.$root.monstercat + '/api/catalog/release')
        .then(data => data.json()).then(json => {
          this.releases = json.results
        })
    },
    components: {
      FeaturedRelease,
      ReleasesList
    }
  }

</script>
