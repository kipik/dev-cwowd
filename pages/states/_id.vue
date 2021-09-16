<template>
  <v-container fluid> 
  
    <!-- Link to go back to the previous page -->
    <a class="uk-button-primary" @click="$router.go(-1)">
      <v-icon>mdi-chevron-double-left</v-icon>
    </a>
    <h1 class="span-title">{{ state.name }}</h1>

    <client-only>
      <div grid>
          <div v-for="game in state.games"
          :key="game.id">
            <v-card class="my-12"
              :loading="loading"
              max-width="374">
              <v-img 
                height="250"
                :src="game.box_cover.url" alt="">
              </v-img>
              <v-card-title>{{ game.title }}</v-card-title>
                <!-- <span class="badge">{{ game.price }}€</span></h3> -->
              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <div class="grey--text ms-4">
                    4.2 (43)
                  </div>
                </v-row>
                <div v-if="game.editor" class="my-4 text-subtitle-1">
                  Editeur : {{ game.editor.name }}
                </div>
                <div v-if="game.description"> {{ game.description.substring(0, 140) }} </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>

              <v-card-text>

                    <v-chip  
                      link      
                      @click="action">Discussion</v-chip>
                    <v-chip>fiche</v-chip>
                    <v-chip 
                     link
                     @click="addToLudo(game)">+ ludo</v-chip>
                    <v-chip>+ favs</v-chip>
              </v-card-text>
            </v-card>
          </div>
      </div>

      <!-- display infos personnalisées / collection -->
      <div class="width-expand@m">
        <Ludo />
      </div>
      </div>  
    </client-only>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import Ludo from '~/components/Ludo.vue'
import stateQuery from '~/apollo/queries/state/state'

export default {
    components: {
    Ludo
  },
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
  },
  methods:{
    ...mapMutations({
      addToLudo: 'ludo/add',
      removeFromLudo: 'ludo/remove'
    }),
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