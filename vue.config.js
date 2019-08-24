module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/stat_kek/'
    : '/',
  transpileDependencies: [
      'vue-echarts',
      'resize-detector'
    ]
  }