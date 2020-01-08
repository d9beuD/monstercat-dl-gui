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
    // If no session has started, start one
    if (this.data.sessionIterator < 0) {
      this.data.sessionIterator += 1
      this.next()
    } else {
      if (this.data.sessions.length > 0) {
        // If a session is started
        let session = this.data.sessions[this.data.sessionIterator]

        // If no file in this session has been downloaded, download one
        if (session.iterator < 0) {
          session.iterator += 1
          this.next()
        } else {
          this._download()

          // If the file iterator is under file length, increment
          console.log('Is file iterator under files length:', (session.iterator < session.files.length - 1))
          if (session.iterator < session.files.length - 1) {
            session.iterator += 1
          } else {
            console.log('sessionIterator:', this.data.sessionIterator)
            if (this.data.sessionIterator < this.data.sessions.length - 1) {
              console.log(this.data.sessionIterator)
              this.data.sessionIterator += 1
            } else {
              console.log('end')
              this.end()
            }
          }
        }
      }
    }
  },
  _download() {
    let session = this.data.sessions[this.data.sessionIterator]
    let file = session.files[session.iterator]

    this.dlManager.download({
      url: file.url,
      path: 'monstercat-download-gui/' + file.album,
      onProgress: progress => {
        this.update(progress)
        if ('onProgress' in session) {
          session.onProgress(progress)
        }
      }
    }, (error, info) => {
      file.isFinised = true
      if ('onDone' in session) {
        session.onDone(error, info)
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
    console.log(this.data.sessions)
    this.data.sessions.forEach(session => {
      console.log(session)
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
