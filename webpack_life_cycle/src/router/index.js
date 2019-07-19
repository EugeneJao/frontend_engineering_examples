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
    component: () => import('../pages/home'),
  }
];
const router = new VueRouter({
  routes: routes,
});
export default router;