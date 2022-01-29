import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'add',

    component: () => import('../views/Add.vue'),
  },
  {
    path: '/update/:id',
    name: 'update',
    component: () => import('../views/Update.vue'),
  },
  {
    path: '/delete/:id',
    name: 'delete',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
