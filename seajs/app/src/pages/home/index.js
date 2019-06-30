define(function(require, exports, module) {
  seajs.use('app/pages/home/style.less');
  // seajs.use('app/pages/home/style.css');
  var tpl = require('app/pages/home/tpl.tpl');
  module.exports = {
    name: 'pg-home',
    template: tpl
  }
});