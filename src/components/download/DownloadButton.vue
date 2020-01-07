<template>
  <a href="#" @click="downloadAll">
    <fa-icon :icon="icon"></fa-icon>
    {{ title }}
  </a>
</template>

<script>
const { ipcRenderer } = require("electron")

export default {
  props: {
    musics: {
      type: Array || Object,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      blobcache: 'https://blobcache.monstercat.com/blobs/',
      i: 0,
      isWorking: false,
      hasError: false
    }
  },
  methods: {
    downloadAll () {
      this.i = 0
      this.isWorking = true
      this.next()
    },
    download (music) {
      ipcRenderer.send('download-button', {
        url: this.blobcache + music.albums.streamHash,
        options: {
          filename: `${music.artistsTitle} - ${music.title}`
        }
      })

      ipcRenderer.on('done', () => {
        this.next()
      })
    },
    next () {
      this.download(this.musics[this.i])
      this.i += 1

      if (this.i > this.musics.length) {
        this.isWorking = false
      }
    }
  },
  computed: {
    icon () {
      if (this.isWorking) {
        return 'sync'
      }

      return this.hasError ? 'exclamation-triangle' : 'download'
    }
  }
}
</script>
