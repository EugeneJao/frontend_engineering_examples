define(function (require, exports, module) {
  var Home = require('app/pages/home/index');
  var routes = [
    {
      path: '/',
      redirect: { name: 'home' },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    }
  ];
  
  var VueRouter = require('vue-router');
  var router = new VueRouter({
    routes: routes,
  });
  module.exports = router;
});