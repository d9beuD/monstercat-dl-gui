<template>
  <div :style="style"></div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  data () {
    return {
      platform: ''
    }
  },
  computed: {
    style () {
      return {
        height: this.platform === 'darwin' ? '30px' : null
      }
    }
  },
  beforeMount () {
    ipcRenderer.send('get-platform')
    ipcRenderer.on('get-platform', (event, platform) => {
      this.platform = platform
    })
  }
}
</script>
