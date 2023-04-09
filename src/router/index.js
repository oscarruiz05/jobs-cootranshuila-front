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
  {
    path: '/nosotros',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/empleos',
    name: 'jobs',
    component: () => import('@/views/Job.vue')
  },
  {
    path: '/contacto',
    name: 'contact',
    component: () => import('@/views/Contact.vue')
  },
  /* servicios */
  {
    name: 'tiquetes',
    path: 'https://cootranshuila.com/'
  },
  {
    name: 'especial',
    path: 'https://cootranshuila.com/info/servicio-especial'
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
