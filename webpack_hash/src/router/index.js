import VueRouter from 'vue-router';

const routes = [{
    path: '/',
    redirect: {
      name: 'home'
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */'../pages/home'),
  },
  {
    path: '/no_change',
    name: 'no_change',
    component: () => import( /* webpackChunkName: "no_change" */ '../pages/no_change'),
  }
];
const router = new VueRouter({
  routes: routes,
});
export default router;