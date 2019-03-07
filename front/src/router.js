import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'main',
      component: Main
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
  ]
})
export default router