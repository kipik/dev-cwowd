<template>
    <v-row class="grid-2-1">
        <v-col class="left" cols="6">
            <router-link 
                v-for="post in leftPosts" 
                :key="post.id" 
                :to="{ name: 'posts-id', params: {id: post.id} }"
                >
                <v-card
                    elevation="4"
                    hover
                    class="my-6"
                >
                    <v-img v-if="post.feature_image"
                        :src="post.feature_image.url" alt=""
                        height="200px"
                    ></v-img>
                    
                    <v-card-actions class="card-action">
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
                    <v-card-title class="text-h6 mb-0 card-title">{{ post.title }}</v-card-title>
                    <v-card-text class="card-text">{{ post.excerpt.substring(0, 200) }}...</v-card-text>
                </v-card>
            </router-link>
        </v-col>

        <v-col class="right" cols="6">
        <router-link v-for="post in rightPosts" :key="post.id" :to="{ name: 'posts-id', params: {id: post.id} }">
            <v-card
                elevation="2"
                class="my-6"
            >
                <v-img v-if="post.feature_image" height="140px"
                    :src="post.feature_image.url" alt=""
                >
                    <v-card-subtitle v-if="post.tags" id="tag" class="small-card-tag text-overline">{{ post.tags[0].name }}</v-card-subtitle>
                </v-img>
                <v-card-actions>
                    <div class="card-title">{{ post.title.substring(0, 90) }}</div>
                </v-card-actions>
            </v-card>
        </router-link> 
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
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
.grid-2-1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    grid-gap: 20px;
    margin: 20px 40px;
}

.left {
    display: grid;
    grid-auto-columns: 35vmax;
    grid-auto-rows: min-content;

}

.right {
    display: grid;
    grid-template-columns: repeat(2, 25vmax);
    grid-auto-rows: min-content;
    gap: 0px 30px;
}

.col {
    padding: 0;
}

.card-title {
    display: flex;
    word-wrap: normal;
    font-size: 14px;
    font-family: Lato;
    line-height: 1.75rem !important;
    padding: 12px !important;
}

.small-card-tag {
    position: absolute;
    bottom: 0;
    padding: 0 8px !important;
    }

.card-action {
    padding: 0 !important;
}

.card-action .text-overline {
    line-height: 1.5rem;
    padding: 10px;
    }

.card-text {
    font-weight: lighter !important;
}
.small-card-tag {
background-color:rgba(0, 0, 0, .4)
}
</style>