/* eslint-disable no-console */

export default {
  dlManager: null,
  app: null,
  win: null,
  data: {
    sessions: [],
    files: [],
    sessionIterator: -1,
    isWorking: false
  },
  download(files, options) {
    let filesList = []

    files.map(file => {
      filesList.push({
        url: file.url,
        album: file.album,
        isFinished: false
      })
    })

    this.data.sessions.push({
      files: filesList,
      options: {
        onProgress: options.onProgress,
        onDone: options.onDone
      },
      iterator: -1
    })

    this.start()
  },
  getFiles() {
    return this.data.files
  },
  setDownloadManager(dlManager) {
    this.dlManager = dlManager
  },
  setApp(app) {
    this.app = app
  },
  setWindow(win) {
    this.win = win
  },
  start() {
    if (!this.data.isWorking) {
      this.next()
      this.isWorking = true
    }
  },
  next() {
    if (this.pendingFiles() > 0) {
      if (this.data.sessionIterator > -1) {
        let session = this.data.sessions[this.data.sessionIterator]

        if (typeof session != 'undefined') {
          if (session.iterator < session.files.length -1) {
            session.iterator += 1
          } else if (session.iterator === session.files.length -1) {
            if (this.data.sessionIterator < this.data.sessions.length -1) {
              this.data.sessionIterator += 1
            }
          }
        }
      } else {
        this.data.sessionIterator += 1
        this.data.sessions[this.data.sessionIterator].iterator += 1
      }

      this._download()
    } else {
      this.end()
    }
  },
  _download() {
    let session = this.data.sessions[this.data.sessionIterator]
    let file = session.files[session.iterator]
    let path = 'monstercat-download-gui/' + file.album

    this.dlManager.download({
      url: file.url,
      path: path,
      onProgress: (progress) => {
        this.update(progress)

        if ('onProgress' in session) {
          session.onProgress(progress)
        }
      }
    }, (error, info) => {
      file.isFinised = true
      if ('onDone' in session.options) {
        session.options.onDone(error, info)
      }
      this.next()
    })
  },
  update({
    progress
  }) {
    this.setBadge(this.pendingFiles())
    this.setProgress(progress / 100)
  },
  setBadge(number) {
    this.app.setBadgeCount(number)
  },
  pendingFiles() {
    let pending = 0

    this.data.sessions.map(session => {
      pending += session.files.filter(file => !file.isFinised).length
    })

    return pending
  },
  setProgress(value) {
    this.win.setProgressBar(value)
  },
  end() {
    this.data.sessions = []
    this.data.sessionIterator = -1
    this.isWorking = false
    this.update({
      progress: -1
    })
  }
}
