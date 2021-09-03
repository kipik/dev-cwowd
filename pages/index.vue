<template>
  <v-row justify="center" align="center">
    <v-col>
      <Posts :posts="posts"></Posts>
    </v-col>
  </v-row>
</template>

<script>
import postsQuery from '~/apollo/queries/post/posts'
import Posts from '~/components/Posts'

export default {
  components: {
    Posts 
  },
  data() {
    return {
      posts: [],
      query: ""
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postsQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>

<style>
</style>