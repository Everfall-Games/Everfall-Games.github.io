import Vue from 'vue'
import VueRouter from 'vue-router'
// import Chat from '../views/Chat.vue'
import NotFound from '../views/404.vue'

import BlankLayout from '@/layouts/Blank.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "home" */ '../views/index.vue'),
  },
  {
    path: '/lb-2',
    name: 'LB2',
    component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "lb-2" */ '../views/LB-2.vue'),
  },
  {
    path: '/limbo',
    name: 'Limbo',
    component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "limbo" */ '../views/Limbo.vue'),
  },
  {
    path: '/western',
    name: 'Western',
    component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "western" */ '../views/Western.vue'),
  },
  // Remove For Time Being As Requested
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "coming-soon" */ '../views/Contact.vue'),
  // },
  // {
  //   path: '/jobs/post',
  //   name: 'PostJob',
  //   // component: PostJob,
  //   component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "postjob" */ '../views/Jobs/Post.vue'),
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  // },
  // {
  //   path: '/signup',
  //   name: 'Signup',
  //   component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "signup" */ '../views/Signup.vue'),
  // },
  {
    path: '*',
    name: '404',
    layout: BlankLayout,
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: '/',
  routes,
})

export default router
