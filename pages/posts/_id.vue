<template>
    <v-container fluid> 
      <v-img 
        v-if="post.feature_image" 
        max-height="350px"        
        class="post-feature"
        :src="post.feature_image.url"
        ></v-img>
        <div class="text-block">
            <h1 class="post-title">{{ post.title }}</h1>
            <div class="section">
                <div v-if="post.content" id="editor" class="post-content"
                    v-html="$md.render(post.content)"
                ></div>
                <p v-if="post.publish_date" class="post-publi-date">Publié le {{ moment(post.publish_date).format("d MMM yyyy") }}</p>
            </div>
        </div>
    </v-container>
</template>

<script>
import moment from 'moment'
import postQuery from '~/apollo/queries/post/post'

export default {
  data() {
    return {
      post: {},
      moment,
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    post: {
      prefetch: true,
      query: postQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>

<style>
.text-block {
    margin: 0 auto;
    max-width: 80vw;
}

.post-title {
    display: flex;
    max-width: calc( 100vw - 20px);
    font-family: Lato;
    margin: 20px 0 40px;
}

.post-content {
    font-weight: 300;
}
.post-publi-date{
    padding: 20px 0;
    font-weight: 200;
    opacity: 50%;
}
</style>