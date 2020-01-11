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
      hasError: false,
      doneCount: this.musics.length
    }
  },
  methods: {
    downloadAll (event) {
      event.preventDefault()

      const { ipcRenderer } = require("electron")
      this.i = 0
      this.doneCount = 0

      ipcRenderer.send('download-musics', {
        urls: this.urls,
        album: this.albumName
      })

      ipcRenderer.on('one-done', () => {
        this.doneCount += 1
      })

      ipcRenderer.on('all-done', () => {
        this.isWorking = false
      })

      ipcRenderer.on('progress', (event, arg) => {
        console.log(arg)
      })
    }
  },
  computed: {
    isWorking () {
      return this.doneCount < this.musics.length
    },
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
          album: this.albumName,
          name: `${music.artistsTitle} - ${music.title}.mp3`
        })
      })

      return urls
    }
  },
  watch: {
    musics (newValue) {
      this.doneCount = newValue
    }
  }
}
</script>
