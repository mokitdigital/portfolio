import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/pages/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/clientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/index.vue'),
    children: [
      {
        path: '/clientes',
        name: 'Clientes',
        component: () => import('../views/pages/clientes/index.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/templates',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/index.vue'),
    children: [
      {
        path: '/templates',
        name: 'Templates',
        component: () => import('../views/pages/templates/index.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/plus',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/index.vue'),
    children: [
      {
        path: '/plus',
        name: 'Plus',
        component: () => import('../views/pages/plus/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
