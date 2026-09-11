import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/components/Home.vue'),
          children: [
            {
              path: '/', 
              name: 'dashboard',
              component: () => import('@/components/Dashboard.vue')
            },
            {
              path: 'profile',
              name: 'profile',
              component: () => import('@/components/Profile.vue')
            },
            {
              path: 'structure',
              name: 'structure',
              component: () => import('@/components/Structure.vue')
            },
            {
              path: 'requests',
              name: 'requests',
              component: () => import('@/components/Requests.vue')
            },
            {
              path: 'documents',
              name: 'documents',
              component: () => import('@/components/Documents.vue')
            }
          ]
        }
      ]
    },
  ],
});

export default router;