import Vue from 'vue'
import VueRouter from 'vue-router'

/* routes */
import { Dashboard } from './routes/dashboard'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  /* dashboard */
  // {
  //   path: 'dashboard',
  //   name: 'dashboard',
  //   component: Dashboard
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
