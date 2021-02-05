import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Index'),
    children: [
      {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/component/Home')
      },
      {
        name: 'About',
        path: '/about',
        component: () => import('@/views/component/About')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
