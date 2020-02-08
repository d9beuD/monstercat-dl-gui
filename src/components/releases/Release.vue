<template>
  <div>
    <return-bar></return-bar>
    <div :style="{backgroundImage: `url('${imgUrl}')`, backgroundSize: 'cover'}">
    <b-container class="py-4 bg-blur mb-3" fluid>
      <b-container>
        <b-row>
          <b-col sm="3" class="d-flex justify-content-center">
            <b-img fluid-grow :src="imgUrl" class="album-img mb-2"></b-img>
          </b-col>
          <b-col sm="9">
            <h3>{{ release.title }}</h3>
            <h4>{{ release.artistsTitle }}</h4>
          </b-col>
        </b-row>
        <download-button :musics="tracks" :album-name="release.title" title="Download all" button></download-button>
      </b-container>
    </b-container>
    </div>
    <b-container>
      <b-table :items="tracks" :fields="fields">
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
import api from '../../api'
import monstercat from '@/monstercat'

export default {
  data () {
    return {
      release: {},
      tracks: [],
      fields: ['title', 'artistsTitle', 'bpm', 'download'],
      blobcache: 'https://blobcache.monstercat.com/blobs/',
      imgUrl: ''
    }
  },
  methods: {
  },
  mounted () {
    api.get.release(this.$route.params.id)
      .then(response => response.data).then(json => {
        this.release = json.release
        this.imgUrl = monstercat.artwork({ id: json.release.id })
        this.tracks = json.tracks
      })
  },
  components: {
    ReturnBar,
    DownloadButton
  }
}
</script>
