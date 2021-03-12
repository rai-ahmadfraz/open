import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import MainPage from '@/components/main_page'
import Signup from '@/components/signup'
import Home from '@/components/home'
import store from '../store'; 
Vue.use(Router)

const router =  new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta:{onlyGuest:true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{onlyGuest:true}
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta:{onlyGuest:true}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{requireAuth:true}
    }
  ]
});

router.beforeEach((to,from,next)=>{
    if(to.matched.some(record => record.meta.requireAuth)){
      if(!store.state.loginUser.token){
          next({name:'Login'});
        }
        else{
          next();
        }
    }
    else if (to.matched.some(record => record.meta.onlyGuest)) {

        if (store.state.loginUser && store.state.loginUser.token) {
            next({name: "Home"});
        } else {
            next();
        }
    }
    else{
      next();
    }
});

export default router;
