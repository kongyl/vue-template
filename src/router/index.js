import Vue from 'vue';
import VueRouter from 'vue-router';

const Page404 = () => import('@/views/pages/Page404');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Page404',
    component: Page404
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
