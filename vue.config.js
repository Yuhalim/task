const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy:{
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {'^/api': '/'},
      },
    }
  }
}
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/tasktracker/'
//     : '/'
// }
// export default defineConfig({
//   base: '/tasktracker/',
// })