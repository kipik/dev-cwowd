<template>
  <v-row justify="center" align="center" class="grid-2-1">
    <v-col>
      <ListGames />
    </v-col>
    <v-col>
      <ListPosts :posts="posts"></ListPosts>
    </v-col>
  </v-row>
</template>

<script>
import postsQuery from '~/apollo/queries/post/posts'
import ListPosts from '~/components/ListPosts'
import ListGames from '~/components/ListGames'


export default {
  components: {
    ListPosts,
    ListGames
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
.grid-2-1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    grid-gap: 20px;
    margin: 20px 40px;
}
</style>