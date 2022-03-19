const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  //关闭严格模式
  lintOnSave: false,
  //跨域问题
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host:"localhost",
    host: '0.0.0.0',
    port: '8080',
    https: false, //是否使用https协议
    hotOnly:false,
    proxy: {
      '/api': {
        target: 'http://cloud-music.pl-fe.cn/',
        ws:false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
      }
    }
  }
})