const merge = require('webpack-merge');
const sass = require('@remax/plugin-sass');

// remax.config.js 默认配置
module.exports = {
  // 配置项目路径，默认当前路径
  cwd: process.cwd(),
  // 是否显示 build 进度，默认显示
  progress: true,
  // 指定代码的根目录，默认 src
  rootDir: 'src',
  // build 目录，默认 dist
  output: 'dist',
  // 是否开启 wxml/axml, js 文件压缩
  // minimize: process.env.NODE_ENV === 'production',
  // 是否将 px 转换为 rpx, 默认是 true
  pxToRpx: true,
  // 是否开启命令行通知
  notify: false,
  // 修改 webpack 的配置
  configWebpack: config => {
    // config 对象为 webpack chain 生成 的 Config，可以直接通过 webpack chain 的方式修改配置 https://github.com/neutrinojs/webpack-chain
  },
  // 对某些页面开启性能优化，具体可以参考《性能优化选项》章节
  turboPages: [],
  //  跨平台
  one: true,
  // 通过环境变量区分不同平台的输出目录
  output: 'dist/' + process.env.REMAX_PLATFORM,
  plugins: [sass()],
};