<template>
  <div>
    <div :style="{backgroundImage: `url('${release.coverUrl}')`, backgroundSize: 'cover'}">
      <return-bar></return-bar>
    <b-container class="py-4 bg-blur mb-3" fluid>
      <b-container>
        <b-row>
          <b-col sm="3">
            <b-img fluid-grow :src="release.coverUrl" class="mb-2"></b-img>
            <div class="d-flex">
              <a href="#">
                <fa-icon icon="download"></fa-icon>
                Download all
              </a>
            </div>
          </b-col>
          <b-col sm="9">
            <h3>{{ release.title }}</h3>
            <h4>{{ release.renderedArtists }}</h4>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    </div>
    <b-container>
      <b-table :items="musics" :fields="fields">
        <template v-slot:cell(download)="data">
          {{ data.item.albums.streamHash }}
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import ReturnBar from './../ReturnBar.vue'

export default {
  data () {
    return {
      release: {},
      album: {},
      fields: ['title', 'artistsTitle', 'bpm', 'download']
    }
  },
  computed: {
    musics () {
      return this.album.results || []
    }
  },
  mounted () {
    fetch(this.$root.monstercat + '/api/catalog/release/' + this.$route.params.id)
      .then(data => data.json()).then(json => {
        this.release = json
        fetch(this.$root.monstercat + '/api/catalog/browse/?albumId=' + this.release._id)
          .then(data => data.json()).then(json => {
            this.album = json
          })
      })
  },
  components: {
    ReturnBar
  }
}
</script>
