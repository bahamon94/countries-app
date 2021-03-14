module.exports = {
  chainWebpack : config => {
    config.plugin('html').tap(args => {
      const tempArgs = [...args]

      tempArgs[0].title = 'Where in the world ? '
      return tempArgs
    })
  }
}