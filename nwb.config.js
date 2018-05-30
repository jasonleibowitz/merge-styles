module.exports = {
  type: 'web-module',
  npm: {
    esModules: true,
    umd: {
      global: 'merge-styles',
      externals: {}
    }
  }
}
