requirejs(['vue', 'vue-router', 'app/router/index', 'app/index'], function (Vue, VueRouter, router, app) {
  Vue.use(VueRouter);
  new Vue({
    el: '#app',
    components: {
      app: app,
    },
    router: router,
    template: '<app/>'
  })
});