module.exports = {
    // tu configuración de webpack
    resolve: {
      fallback: {
        https: require.resolve('https-browserify')
      }
    }
  }
  