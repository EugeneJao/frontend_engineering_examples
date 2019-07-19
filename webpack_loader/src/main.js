import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './app';
import router from './router';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  components: {[App.name]: App},
  template: '<app />',
  router: router,
});