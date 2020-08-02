const path = require('path');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
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
    ],
  },
});