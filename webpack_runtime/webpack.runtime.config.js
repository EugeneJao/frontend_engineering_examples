const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].runtime.js',
    path: path.resolve('./dist'),
    publicPath: '',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    writeToDisk: true,
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    }
  },
  plugins: [
    new webpack.NamedChunksPlugin(chunk => {
      return `${chunk.id}_${Date.now()}`;
    }),
  ],

};