<template>
  <div>
    <!-- <MainHeader></MainHeader> -->
    <HomeHeader></HomeHeader>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from './components/main_header';
import HomeHeader from './components/home_header';
export default {
  name: 'App',
  components:{MainHeader,HomeHeader}
}
</script>
