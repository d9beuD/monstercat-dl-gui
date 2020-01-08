<template>
  <div>
    <return-bar></return-bar>
    <div :style="{backgroundImage: `url('${release.coverUrl}')`, backgroundSize: 'cover'}">
    <b-container class="py-4 bg-blur mb-3" fluid>
      <b-container>
        <b-row>
          <b-col sm="3">
            <b-img fluid-grow :src="release.coverUrl" class="mb-2"></b-img>
            <div class="d-flex">
              <download-button :musics="musics" :album-name="release.title" title="Download all"></download-button>
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
          <download-button :musics="[data.item]" :album-name="release.title"></download-button>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import ReturnBar from './../ReturnBar.vue'
import DownloadButton from './../download/DownloadButton.vue'

export default {
  data () {
    return {
      release: {},
      album: {},
      fields: ['title', 'artistsTitle', 'bpm', 'download'],
      blobcache: 'https://blobcache.monstercat.com/blobs/'
    }
  },
  computed: {
    musics () {
      return this.album.results || []
    }
  },
  methods: {
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
    ReturnBar,
    DownloadButton
  }
}
</script>
