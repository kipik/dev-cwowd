<template>
     <v-row class="games-grid">
        <client-only placeholder="Loading...">
        <!-- <router-link 
            v-for="game in Games" 
            :key="game.id" 
            :to="{ name: 'games-id', params: {id: game.id} }"
        >
            <p>{{ game.title }}</p>
        </router-link> -->
            <div v-for="game in games" 
                :key="game.id"
                >
                <div>
                <v-card tile class="small-card">
                    <v-row>
                        <v-col class="shrink">
                            <v-img v-if="game.box_cover"
                                :src="game.box_cover.url" 
                                alt="" 
                                class="ml-3">
                            </v-img>
                        </v-col>
                        <v-col>
                            <v-card-title class="texth6">{{ game.title }}</v-card-title>
                            <v-card-subtitle class="textsub">{{ game.editor[0].name }}</v-card-subtitle>
                        </v-col>
                    </v-row>
                </v-card>
                </div>  
                     <!--  <v-card-actions class="card-action">
                        <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-bookmark</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions> -->
                    <!-- <v-card-text v-if="game.description" class="card-text">{{ game.description.substring(0, 200) }}...</v-card-text> -->
            </div>
        </client-only>
    </v-row>
</template>

<script>
export default {
    props: {
        games: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            api_url: process.env.strapiBaseUri
        }
    }
}
</script>

<style>
.ml-3 {
    width: 75px;
    height: 75px;
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-template-rows: min-content;
    margin: 50px 80px 0 80px;
    gap: 10px;
    justify-items: stretch;
}

.small-card {
    /* justify-self: stretch !important;
    padding-right: 12px; */
    height: 75px;

}

.texth6 {
    font-family: Lato !important;
    font-weight:600 !important;
    font-size: 1.1rem !important;
    padding: 2px 12px 0 !important;
}

.textsub {
    opacity: .6;
    padding: 0 12px 2px !important;
    margin: 0 !important;
}
</style>