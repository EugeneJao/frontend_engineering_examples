var Vue  = require ('vue/dist/vue.common');
var VueRouter = require ('vue-router/dist/vue-router.common');
var App = require ('./app');
var router = require ('./router/index');

Vue.use(VueRouter);

new Vue({
  el: '#app',
  components: {app: App},
  template: '<app />',
  router: router,
});
