
const loaderUtils = require('loader-utils');

const getOptions = loaderUtils.getOptions;

module.exports =  function loader(source) {
  console.log('hey-loader source:', source);
  const options = getOptions(this);

  source = source.replace(/\[name\]/g, 'hey');
  return this.callback(null, `module.exports=${JSON.stringify(source)}`, null, null);

  // return ;
};
