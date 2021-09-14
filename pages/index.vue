<template>
<div>
  <v-row justify="center" align="center">
      <ListStates :states="states"></ListStates>
  </v-row>
  <v-row justify="center" align="center" class="grid-2-1">
    <v-col>
      <ListPosts :posts="posts"></ListPosts>
    </v-col>
  </v-row>
</div>
</template>

<script>
import postsQuery from '~/apollo/queries/post/posts'
import statesQuery from '~/apollo/queries/state/states'
import ListPosts from '~/components/ListPosts'
import ListStates from '~/components/ListStates'

export default {
  components: {
    ListPosts,
    ListStates
  },
  data() {
    return {
      posts: [],
      states: [],
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
    },
    states: {
      prefetch: true,
      query: statesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}

</script>

<style>
/* .grid-2-1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    grid-gap: 20px;
    margin: 20px 40px;
} */
</style>