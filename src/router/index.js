import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/views/Layout.vue')
  },
  {
    path: '/container',
    name: 'Container',
    component: () => import('@/views/Container.vue')
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('@/views/Icon.vue')
  },
  {
    path: '/cascader',
    name: 'Cascader',
    component: () => import('@/views/Cascader.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
