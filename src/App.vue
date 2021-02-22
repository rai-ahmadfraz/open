<template>
  <div>
    <HomeHeader v-if="islogin"></HomeHeader>
    <MainHeader v-else></MainHeader>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from './components/main_header';
import HomeHeader from './components/home_header';
export default {
  name: 'App',
  components:{MainHeader,HomeHeader},
  data(){
    return{
      islogin:true
    }
  }
}
</script>
