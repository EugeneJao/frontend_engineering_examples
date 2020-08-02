const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          // 将js的css资源依赖插通过style标签插入到dom中。
          'style-loader',
          // 解析js文件的css资源依赖。
          'css-loader'
        ],
      },
       {
         test: /\.less$/,
         use: [
           // 将js的css资源依赖插通过style标签插入到dom中。
           'style-loader',
           'css-loader',
           // 解析js文件的css资源依赖。
           'less-loader'
         ],
       },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          // 解析引用的静态资源依赖
          'file-loader',
        ],
      },
      {
        // test: /\.(png|svg|jpg|gif|html)$/,
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          // 解析引用的静态资源依赖
          'file-loader',
        ],
      },
      // 注释掉该loader同时在file-loader中增加对html后缀的解析，通过查看浏览器console，可以更好的理解file-loader和html-loader之间的区别
      {
        test: /\.html$/,
        use: [
          // 解析引用的静态资源依赖
          'html-loader',
        ],
      },
      {
        test: /\.csv$/,
        use: [
          // 解析引用的静态资源依赖
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          // 解析引用的静态资源依赖
          'xml-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.dev',
      '@': path.resolve(__dirname, '../src/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo',
      template: path.resolve(__dirname, '../index.html'),
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new ManifestPlugin(),
  ],

  // 不对外暴露的sourcemap
  // devtool: 'hidden-source-map',
  // 对外暴露的，和运行代码分开的sourcemap
  // devtool: 'inline-source-map', // babel async await 打断点会有问题, 配置retainLines依然无法解决
  devtool: 'source-map', // babel async await 打断点会有问题, 配置retainLines依然无法解决
    // devtool: 'module-source-map', // babel async await 打断点会有问题, 配置retainLines依然无法解决
  // devtool: 'eval', // 调试无法还原真正的源文件内容
  // devtool: 'eval-source-map', // babel async await 打断点会有问题, 配置retainLines依然无法解决
  // devtool: 'cheap-source-map', // 调试无法还原真正的源文件内容， 因为不包含第三方库
  // devtool: 'cheap-module-source-map', // babel async await 打断点会有问题, 需要配置retainLines
  // devtool: 'cheap-eval-source-map', // 调试无法还原真正的源文件内容
  // devtool: 'cheap-module-eval-source-map', // babel async await 打断点会有问题, 需要配置retainLines
};