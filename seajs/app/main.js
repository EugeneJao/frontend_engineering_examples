define(function (require) {
  var Vue = require('vue');
  var app = require('app/index');
  var router = require('app/router/index');
  var VueRouter = require('vue-router');
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