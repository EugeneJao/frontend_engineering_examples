var VueRouter = require ('vue-router/dist/vue-router.common');

var Home = function (resolve) {
  loadjs(['page_home'], function (Home) {
    console.log(Home);
    resolve(Home);
  });
};
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
