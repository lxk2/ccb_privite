import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/community/index',
    name: 'community/index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/community/index')
  },
  {
    path: '/home/search',
    name: 'home/search',
    component: () => import('../views/home/search')
  },
  {
    path: '/message/index',
    name: 'message/index',
    component: () => import('../views/message/index')
  },
  {
    path: '/user/index',
    name: 'user/index',
    component: () => import('../views/user/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
