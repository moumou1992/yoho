import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/login'
import Sign from '../pages/sign'
import yohogroup from '../pages/yohogroup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/yohogroup',
      name: 'yohogroup',
      component: yohogroup
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
