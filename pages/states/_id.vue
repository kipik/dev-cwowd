<template>
    <v-container fluid> 
        <h1 class="post-title">{{ state.name }}</h1>
    </v-container>
</template>

<script>
import stateQuery from '~/apollo/queries/state/state'

export default {
  data() {
    return {
      state: {},
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    state: {
      prefetch: true,
      query: stateQuery,
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