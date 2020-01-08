<template>
  <a href="#" @click="downloadAll">
    <fa-icon :icon="icon" :spin="isWorking"></fa-icon>
    {{ title }}
  </a>
</template>

<script>
/* eslint-disable no-console */
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
    },
    albumName: {
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
      const { ipcRenderer } = require("electron")
      this.i = 0
      this.isWorking = true

      ipcRenderer.send('download-musics', {
        urls: this.urls,
        album: this.albumName
      })

      ipcRenderer.on('one-done', () => {
        console.log('one-done')
      })

      ipcRenderer.on('all-done', () => {
        this.isWorking = false
      })

      ipcRenderer.on('progress', (event, arg) => {
        console.log(arg)
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
    },
    urls () {
      let urls = []

      this.musics.map(music => {
        urls.push({
          url: this.blobcache + music.albums.streamHash,
          album: this.albumName
        })
      })

      return urls
    }
  }
}
</script>
