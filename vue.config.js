const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  //关闭严格模式
  lintOnSave: false,
  //跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000/',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': '' //重写,
        }
      }

    }
  }
})