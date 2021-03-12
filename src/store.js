import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state:{
      loginUser:[]
    },
    mutations:{
      addLoginUser(state,user){
        state.loginUser = user;
      },
      removeLoginUser(state,user){
        state.loginUser = [];
      }
    }
  });
  export default store;
