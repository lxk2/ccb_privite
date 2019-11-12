import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index/index.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/community/index/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
