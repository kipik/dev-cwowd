<template>
    <client-only>
        <v-app-bar dark app dense>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>
                <NuxtLink to="/" class="a">Cwowd</NuxtLink>
            </v-toolbar-title>
            <v-subheader class="subheader">Ludique et participatif</v-subheader>
      
            <v-spacer />
      
            <div class="navbar-right">
                <ul class="navbar-nav">
                    <li v-for="tag in tags" :key="tag.id" class="links">
                        <router-link 
                        :to="{ name: 'tags-id', params: {id: tag.id} }" 
                        tag="a" 
                        class="a">
                        {{ tag.name }}
                        </router-link>
                    </li>
                </ul>
      </div>
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

.links {
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
}
</style>