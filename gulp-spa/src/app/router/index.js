define(['vue-router', 'app/pages/home/index'], function (VueRouter, Home) {
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
  var router = new VueRouter({
    routes: routes,
  });
  return router;
});