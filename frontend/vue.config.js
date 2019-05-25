module.exports = {
  pluginOptions: {
    quasar: {
      theme: 'mat',
      importAll: true,
      treeShake: true,
      framework: {
        directives: ['Ripple']
      }
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/
  ]
}
