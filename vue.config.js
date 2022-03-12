const { defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  //关闭严格模式
  lintOnSave: false,
  //跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: '',
        ws: true,
        changeOrigin: true,
      },
      '/': {
        target: 'http://cloud-music.pl-fe.cn/',
        ws: true,
        changeOrigin: true,
      }
    }
  }
})