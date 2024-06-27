const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('glsl')
      .test(/\.glsl$/)
      .use('webpack-glsl-loader')
      .loader('webpack-glsl-loader')
  }
}
