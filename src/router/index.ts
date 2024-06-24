import { createRouter, createWebHistory } from 'vue-router';
import { HomeView } from '@/views';

const router = createRouter({
  history: createWebHistory('/literacite/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
});

export default router;
