import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
    {
        path: '/',
        name: 'Home',
        component:() => import ('@/views/Home') 
      },
  {
    path: '/city',
    name: 'City',
    component: () => import ('@/views/City')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import ('@/views/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
