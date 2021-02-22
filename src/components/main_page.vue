<template>
  <PostCard></PostCard>
</template>

<script>
import PostCard from './post/post_card'
export default {
  name: 'MainPage',
  components:{PostCard}
}
</script>

<style scoped>
        .form-control {
            height: 42px;
        }

        .form-group {
            padding: 5px;
        }

        .login_button {
            display: flex;
            justify-content: center;
        }

        .btn-primary {
            width: 25%;
        }

        .navbar-default .navbar-nav>li>a {
            font-size: 16px;
        }
</style>