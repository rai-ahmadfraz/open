import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import MainPage from '@/components/main_page'
import Signup from '@/components/signup'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
