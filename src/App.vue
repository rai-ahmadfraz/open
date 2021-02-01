<template>
  <div>
    <MainHeader></MainHeader>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from './components/main_header';
export default {
  name: 'App',
  components:{MainHeader}
}
</script>
