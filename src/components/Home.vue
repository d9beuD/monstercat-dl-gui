<template>
  <div>
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
      fetch(this.$root.monstercat + '/api/catalog/release?limit=50')
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
