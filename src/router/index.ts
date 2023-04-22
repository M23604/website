// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/students',
        name: 'Team',
        component: () => import('@/views/Team.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  const toPath = to.path
  const fromPath = from.path
  to.meta.transition = (toPath ===  '/' && fromPath === '/') ? 'slide-up' : ''
})

export default router
