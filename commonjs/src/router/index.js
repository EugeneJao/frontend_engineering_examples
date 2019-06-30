var VueRouter = require('vue-router/dist/vue-router.common');
var Home = require('../pages/home/index');
var routes = [{
    path: '/',
    redirect: {
      name: 'home'
    },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  }
];
var router = new VueRouter({
  routes: routes,
});
module.exports = router;