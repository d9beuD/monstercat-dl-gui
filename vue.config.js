module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        mac: {
          icon: 'build/monstercat-dl@512x512.icns',
          target: ['mas']
        }
      }
    }
  }
}
