<template>
    <client-only>
        <v-app-bar dark app dense>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>
                <NuxtLink to="/" class="a">Cwowd</NuxtLink>
            </v-toolbar-title>
            <v-subheader class="subheader">Ludique et participatif</v-subheader>
      
            <v-spacer />
      
                <ul class="navbar-nav">
                    <li v-for="tag in tags" :key="tag.id" class="link">
                        <router-link 
                        :to="{ name: 'tags-id', params: {id: tag.id} }" 
                        tag="a" 
                        class="a">
                        {{ tag.name }}
                        </router-link>
                    </li>
                    <NuxtLink to="/games" class="link a">Ludothèque</NuxtLink>
                </ul>

        </v-app-bar>

  </client-only>
</template>

<script>
import tagsQuery from '~/apollo/queries/tag/tags'

export default {
    apollo: {
        tags: {
        prefetch: true,
        query: tagsQuery 
        }
    },
    data () {
        return {
            tags: []
        }
    }  
}
</script>
<style scoped>
.a {
  text-decoration: none;
  color: honeydew;
}
.navbar-nav {
    display: flex;
}

.link {
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  font-size: 0.8rem !important;
}
</style>