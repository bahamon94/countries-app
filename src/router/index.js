import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Default from '@/layouts/Default'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Default,
    children: [
      {
        path : "/",
        component: Home
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
