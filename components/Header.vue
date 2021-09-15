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

            <v-spacer></v-spacer>

        <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li v-if="username">
            <a href="#" class="nav-link">
              Hello {{ username }}
            </a>
          </li>
          <li v-if="username">
            <a href="#" class="nav-link" @click="logout">
              Logout
            </a>
          </li>
          <li v-if="!username">
            <router-link v-if="!username" tag="a" class="nav-link" to="/signin">
              Connexion
            </router-link>
          </li>
          <li v-if="!username">
            <router-link v-if="!username" tag="a" class="nav-link" to="/register">
              Inscription
            </router-link>
          </li>
        </ul>
      </div>

            <!-- If you are logged in
            <ul v-if="username" class="navbar-nav">
                <li><a href="#" class="link-reset">{{ username }}</a></li>
                <li><a href="#" @click="logout">Déconnexion</a></li>
            </ul>

            If you are not logged in
            <ul v-else class="uk-navbar-nav">
                <li><a href="/users/register">Inscription</a></li>
                <li><a href="/users/signin">Connexion</a></li>
            </ul> --> 
        </v-app-bar>
  </client-only>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
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
    },
    computed: {
        // Set your username thanks to your getter
        ...mapGetters({
            username: 'auth/username'
        })
    },
    methods: {
        // Define your needed mutations, here: auth/logout
        ...mapMutations({
            logout: 'auth/logout'
        })
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