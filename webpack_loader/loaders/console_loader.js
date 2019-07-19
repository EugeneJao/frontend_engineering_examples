const loaderUtils = require('loader-utils');

const getOptions = loaderUtils.getOptions;

module.exports = function loader(source) {
  console.log('console-loader source:', source);
   return this.callback(null, source, null, null);
};
