<template>
    <v-container fluid>
        <v-row dense>
            <v-col cols=7 md="6">
                <router-link v-for="post in leftPosts" :key="post.id" :to="{ name: 'posts-id', params: {id: post.id} }">
                    <v-card
                        elevation="4"
                        hover
                        tile
                        class="mx-auto my-6"
                        max-width="374"
                    >
                        <v-img v-if="post.feature_image" height="250px"
                            class="white--text align-end"
                            :src="post.feature_image.url" alt=""
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        ></v-img>
                        <v-card-actions>
                            <v-card-subtitle v-if="post.tags" id="tag" class="text-overline">{{ post.tags[0].name }}</v-card-subtitle>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-card-title class="text-h6 mb-0">{{ post.title }}</v-card-title>
                        <v-card-text>{{ post.excerpt.substring(0, 155) }}...</v-card-text>
                    </v-card>
                </router-link>
            </v-col> 
            <v-col cols=5 md="6" dense>
                <router-link v-for="post in rightPosts" :key="post.id" :to="{ name: 'posts-id', params: {id: post.id} }" class="uk-link-reset">
                    <v-card
                        elevation="2"
                        tile
                        class="mx-auto my-6"

                    >
                        <v-img v-if="post.feature_image" height="200px"
                            class="white--text align-end"
                            :src="post.feature_image.url" alt=""
                        >
                            <v-card-subtitle v-if="post.tags" id="tag">{{ post.tags[0].name }}</v-card-subtitle>
                            <v-card-title class="text-h5">{{ post.title }}</v-card-title>
                        </v-img>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class="ml-2 mt-5"
                                outlined
                                rounded
                                small
                            >
                               + d'infos
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </router-link> 
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        posts: Array
    },
    data() {
        return {
            api_url: process.env.strapiBaseUri
        }
    },
    computed: {
        leftPostsCount(){
            return Math.ceil(this.posts.length / 5)
        },
        leftPosts(){
            return this.posts.slice(0, this.leftPostsCount)
        },
        rightPosts(){
      return this.posts.slice(this.leftPostsCount, this.posts.length)
    }
  }
}
</script>

<style>
a {
    text-decoration: none;
}
</style>