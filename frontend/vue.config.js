module.exports = {
  pluginOptions: {
    quasar: {
      theme: 'mat',
      importAll: true,
      treeShake: true
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/
  ]
}
