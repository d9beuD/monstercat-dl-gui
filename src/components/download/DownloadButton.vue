<template>
  <a :class="{'btn btn-primary': button, disabled: isWorking}" href="#" @click="downloadAll">
    <div>
      <fa-icon :icon="icon" :spin="isWorking"></fa-icon>
      {{ title }}
    </div>
    <div v-if="progress > 0">
      <b-progress :value="progress" :variant="button ? progressBarVariant : variant" height="3px" :class="[button ? 'bg-' + variant : '']"></b-progress>
    </div>
  </a>
</template>

<script>
/* eslint-disable no-console */

import { mapActions } from 'vuex'

export default {
  props: {
    musics: {
      type: Array,
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
    },
    button: {
      type: Boolean,
      required: false,
      default: false
    },
    variant: {
      type: String,
      required: false,
      default: 'primary'
    },
    progressBarVariant: {
      type: String,
      required: false,
      default: 'white'
    }
  },
  data () {
    return {
      blobcache: 'https://blobcache.monstercat.com/blobs/',
      i: 0,
      hasError: false,
      doneCount: this.musics.length,
      progress: 0,
      success: false
    }
  },
  methods: {
    ...mapActions('downloader', [
      'download'
    ]),
    downloadAll () {
      this.download(this.musics)
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

      return this.success ? 'check' : 'download'
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
    },
    progress (newValue) {
      if (newValue >= 100) {
        this.progress = 0
      }
    }
  }
}
</script>
