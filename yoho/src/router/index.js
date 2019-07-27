import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/login'
import Sign from '../pages/sign'
import index from '../pages/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/sign',
      name: 'Sign',
      component: Sign

    }
  ]
})
