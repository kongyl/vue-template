import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: () => import('@/containers/TheContainer'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/pages/Login')
  },
  {
    path: '/404',
    component: () => import('@/views/pages/Page404')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
