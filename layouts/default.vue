<template>
  <v-app>
    <Header />
    
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Accueil',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Discussions | Forum',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  }
}
</script>

<style scoped>
.a {
  text-decoration: none;
  color: honeydew;
}
</style>