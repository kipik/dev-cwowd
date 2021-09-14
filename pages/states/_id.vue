<template>
  <v-container fluid> 
  
    <!-- Link to go back to the previous page -->
    <a class="uk-button-primary" @click="$router.go(-1)">
      <v-icon>mdi-chevron-double-left</v-icon>
      go back
    </a>
    <h1 class="span-title">{{ state.name }}</h1>

    <client-only>
      <div grid>
        <div class="width-1-3@m">
          <div v-for="game in state.games"
          :key="game.id">
            <div class="card">
              <div class="card-media-top">
                    <img :src="game.box_cover.url" alt="" />
              </div> 
                <div class="card-body">
                    <h3 class="card-title">{{ game.title }}</h3>
                      <!-- <span class="badge">{{ game.price }}€</span></h3> -->
                    <p>{{ game.description }}</p>
                </div>
                <div class="card-footer">
                  
                  <!-- Ajout à collection etc  -->
                  <button class="button-primary">Add to cart</button>
                </div>
            </div>
        </div>
      </div>

      <!-- display infos personnalisées / collection -->
      <div class="width-expand@m">
      </div>
      </div>  
    </client-only>
  </v-container>
</template>

<script>
import stateQuery from '~/apollo/queries/state/state'

export default {
  data() {
    return {
      state: Object,
      // api_url: process.env.strapiBaseUri
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
.span-title {
  display: inline-flex;
}
</style>