<template>
<div>
    <client-only placeholder="Loading...">
    <div>  <div>
            <h1>{{ tag.name }}</h1>
            <!-- <Posts :posts="tag.posts || []" /> -->
            <ul>
              <li v-for="post in tag.posts" 
                :key="post.id">
                {{ post.title }}
              </li>
          </ul>
      </div></div>
  </client-only>
</div>
</template>

<script>
import postsQuery from '~/apollo/queries/post/posts-tags'
// import Posts from '~/components/Posts'

export default {
  // components: {
  //   Posts
  // },
    data() {
    return {
      tag: []
    }
  },
  apollo: {
    tag: {
      prefetch: true,
      query: postsQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  },
  // mounted() {
  // this.$nextTick(() => {
  //   this.$nuxt.$loading.start()
  //   setTimeout(() => this.$nuxt.$loading.finish(), 500)
  // })
  // }
}
</script>