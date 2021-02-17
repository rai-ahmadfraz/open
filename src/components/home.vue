<template>
  <div>
    <CreatePostCard></CreatePostCard>
    <PostCard></PostCard>
    </div>
</template>

<script>
import PostCard from './post/post_card'
import CreatePostCard from './post/create_post'
export default {
  name: 'Home',
  components:{PostCard,CreatePostCard}
}
</script>