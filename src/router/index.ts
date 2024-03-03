import { createRouter, createWebHistory } from 'vue-router';
import ExpensesView from '../views/ExpensesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'expenses',
      component: ExpensesView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ]
});

export default router;
