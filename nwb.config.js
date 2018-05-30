module.exports = {
  type: 'web-module',
  npm: {
    esModules: true,
    umd: {
      global: '@jasonleibowitz/merge-styles',
      externals: {}
    }
  }
}
