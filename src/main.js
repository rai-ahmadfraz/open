// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';
import Toasted from 'vue-toasted';
import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store';

Vue.use(Toasted, {
  theme: "bubble",
  position: "bottom-right",
  singleton: true,
  duration: 5000
});
Vue.use(VeeValidate);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
