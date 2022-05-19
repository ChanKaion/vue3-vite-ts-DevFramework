import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'vue3-dev-template',
    component: () => import('@/views/devTemplate.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
