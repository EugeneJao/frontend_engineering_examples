var fs = require('fs');
var revisionHash = require('rev-hash');
var entryPath = './src/main.js';
var pageHomePath = './src/pages/home/index.js';
var appHash = revisionHash(fs.readFileSync(entryPath));
var pageHomeHash = revisionHash(fs.readFileSync(pageHomePath));
var config = {};
var entryCompiledFileName = ['app', appHash, 'js'].join('.');
var pageHomeCompiledFileName = ['pages/home', pageHomeHash, 'js'].join('.');
config[entryCompiledFileName] = [entryPath];
config[pageHomeCompiledFileName] = [{
  require: pageHomePath,
  expose: 'page_home'
}];
var configJson = JSON.stringify(config);
module.exports = function() {
  var fileName = 'bundle.json';
  fs.writeFileSync(fileName, configJson);
  return fileName;
};
