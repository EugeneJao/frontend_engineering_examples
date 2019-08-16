const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const hashMode = process.env.npm_config_hash || 'hash';
const extractCss = process.env.npm_config_extcss;
const extractRuntime = process.env.npm_config_extruntime


console.log('hash mode:', hashMode);
if (extractCss) console.log('extract css:', extractCss);
if (extractRuntime) console.log(' extract runtime chunk:', extractRuntime);

const outputPath = path.resolve(__dirname, `../${hashMode}_${extractCss ? 'extcss_' : ''}${extractRuntime ? 'extruntime_' : ''}dist`);
const webpackConfig = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    filename: `[name].[${hashMode}].js`,
    path: outputPath,
    publicPath: '',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCss ? [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          // 解析js文件的css资源依赖。
          'css-loader'
        ]: [
          // 将js的css资源依赖插通过style标签插入到dom中。
          'style-loader',
          // 解析js文件的css资源依赖。
          'css-loader'
        ],
      },
       {
         test: /\.less$/,
         use: extractCss ? [
           {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
            },
          'css-loader',
          // 解析js文件的css资源依赖。
          'less-loader'
         ]: [
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
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
            },
          },
        ],
      },
      {
        // test: /\.(png|svg|jpg|gif|html)$/,
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
          name: `[name].[contenthash].[ext]`,
          },
        },
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
  ],

  // 不对外暴露的sourcemap
  // devtool: 'hidden-source-map',
  // 对外暴露的，和运行代码分开的sourcemap
  // devtool: 'source-map',
  // 不生成sourcemap
  devtool: 'none',
  optimization: {},
};

if (extractCss) webpackConfig.plugins.push(new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // all options are optional
  filename: '[name].[contenthash].css',
  chunkFilename: '[id].[contenthash].css',
  ignoreOrder: false, // Enable to remove warnings about conflicting order
}));

if (extractRuntime) webpackConfig.optimization.runtimeChunk = {
  name: 'runtime'
};

module.exports = webpackConfig;