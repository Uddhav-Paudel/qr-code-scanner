import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'scan',
      component: () => import('../views/ScanView.vue'),
    },

    {
      path: '/result',
      name: 'result',
      component: () => import('../views/ResultView.vue'),
    },
  ],
})

export default router
