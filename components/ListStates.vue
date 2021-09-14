<template>
    <v-row class="states-grid">
        <client-only placeholder="Loading...">
        <!-- <router-link 
            v-for="game in Games" 
            :key="game.id" 
            :to="{ name: 'games-id', params: {id: game.id} }"
        >
            <p>{{ game.title }}</p>
        </router-link> -->
            <router-link v-for="state in states" 
                :key="state.id"
                :to="{ name: 'states-id', params: {id: state.id} }"

            >
                <div v-if="state.id > 6">                
                    <v-chip
                            v-if="state.id == 7" 
                            color="orange"
                            outlined
                            pill
                            link 
                        >{{ state.name }}</v-chip>
                        <v-chip
                            v-if="state.id != 7" 
                            outlined
                            pill
                            link
                        >{{ state.name }}</v-chip>
                </div>
            </router-link>
                <!-- <v-card tile class="small-card">
                    <v-row> -->
                        <!-- <v-col class="shrink">
                            <v-img v-if="game.box_cover"
                                :src="game.box_cover.url" 
                                alt="" 
                                class="ml-3">
                            </v-img>
                        </v-col> -->
                        <!-- <v-col> -->
                            <!-- <v-card-title class="texth6"></v-card-title> -->
                            <!-- <v-card-subtitle class="textsub">{{ game.editor[0].name }}</v-card-subtitle> -->
                        <!-- </v-col>
                    </v-row>
                </v-card> 
                </div>  -->
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
        </client-only>
    </v-row>
</template>

<script>
export default {
    props: {
        states: {
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
.states-grid {
    margin: 20px 40px;
}

</style>