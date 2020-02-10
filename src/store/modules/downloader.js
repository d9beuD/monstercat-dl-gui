import { remote } from 'electron'
const win = remote.getCurrentWindow()

export default {
  namespaced: true,

  state: {
    queue: [],
    downloading: false,
    currentId: null,
    progress: 0
  },

  getters: {
    currentDownload: (state) => {
      return state.queue.find(track => track.id === state.currentId)
    }
  },

  mutations: {
    add: (state, payload) => {
      state.queue.push(...payload)
    },

    start: (state) => {
      state.downloading = true
    },

    end: (state) => {
      state.downloading = false
    },

    next: (state) => {
      // A track has already been downloaded
      if (state.currentId != null) {
        state.queue.slice(0,1)
      }

      if (state.queue.length > 0) {
        state.currentId = state.queue[0].id
      } else {
        state.downloading = false
      }
    },

    progress: (state, progress) => {
      state.progress = progress
    }
  },

  actions: {
    download: async ({ state, commit, dispatch }, payload) => {
      commit('add', payload)

      if (!state.downloading) {
        dispatch('startDownload')
      }
    },

    startDownload: ({ commit, dispatch }) => {
      const DownloadManager = require("electron").remote.require("electron-download-manager")
      commit('start')
      dispatch('next', DownloadManager)
    },

    next: ({ state, getters, commit, dispatch }, DownloadManager) => {
      if (state.queue.length > 0) {
        commit('next')
      }

      if (state.queue.length > 0) {
        win.setDownloadSavePath(
          `${remote.app.getPath('downloads')}/monstercat-dl-gui/${getters.currentDownload.release.title}`
        )

        DownloadManager.download({
          url: `https://connect.monstercat.com/v2/release/${getters.currentDownload.release.id}/track-stream/${getters.currentDownload.id}`,
          path: getters.currentDownload.release.title,
          onProgress: (progress) => {
            commit('progress', progress.progress)
          }
        }, () => {
          dispatch('next')
        })
      }
    }
  }
}
