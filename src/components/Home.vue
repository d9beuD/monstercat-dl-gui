<template>
  <div>
    <h1>Releases</h1>
    <b-container fluid>
    <b-row>
      <b-col
        v-for="(release, index) in releases" :key="index"
        md="6"
        lg="4"
        >
        <b-img fluid :src="release.coverUrl"></b-img>
        {{ release.title }}
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      releases: []
    }
  },
  mounted () {
    fetch(this.$root.monstercat + '/api/catalog/release')
    .then(data => data.json()).then(json => {
      this.releases = json.results
    })
  }
}
</script>
