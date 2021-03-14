import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import viewCountry from '@/views/_country.vue'
import Default from '@/layouts/Default'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "/home",
    component: Default,
    children: [
      {
        path : "/home",
        component: Home
      },
      {
        path: "/:country",
        component:  viewCountry
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
