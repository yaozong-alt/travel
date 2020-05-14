import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
    {
        path: '/',
        name: 'Home',
        component:() => import ('@/components/home/Home') 
      },
  {
    path: '/city',
    name: 'City',
    component: () => import ('../views/city/City.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
