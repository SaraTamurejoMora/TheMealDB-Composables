import { createRouter, createWebHistory } from 'vue-router'
import MealDetail from '@/views/MealDetail.vue'
import Home from '@/views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [    {
      path: "/",
      name: "Home",
      component: Home
    },
      {
      path:'/meal/:id',
      name: 'Meal',
      component: MealDetail
    }
  ]
})

export default router
