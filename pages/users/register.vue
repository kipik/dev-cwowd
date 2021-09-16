<template>
  <section class="container">
    <div class="col-md-6 offset-md-3 mt-3">
      <form autocomplete="off" @submit.stop.prevent="handleSubmit">
        <legend class="legend">Inscription</legend>
          <v-text-field
            id="username"
            v-model="username"
            label="Nom d'utilisateur (pseudo)"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            id="email"
            v-model="email"
            label="E-mail"
            :rules="[rules.required, rules.email]"
          ></v-text-field>
          <v-text-field
            id="password"
            v-model="password"
            label="mot de passe"
            required
          ></v-text-field>
          <div class="switch">
            <v-btn
              class="mr-4"
              :disabled="loading"
              @click="handleSubmit"
            >
              Envoi
            </v-btn>
            <span class="margin">
              <p>
                Déjà inscrit ?
                <router-link :to="{ name: 'users-signin'}">
                  Connectez-vous
                </router-link>
              </p>
            </span>
          </div>
      </form>
    </div>
  </section>
</template>

<script>
// Import mapMutations in order to call mutations from your store
import { mapMutations } from 'vuex'
import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  data() {
    return {
      email: '',
      password: '',
      username: '',
      loading: false,
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  methods: {
    // Method that will register your users
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        )
        this.loading = false
        // Call your setUser mutation from your auth.js store file
        this.setUser(response.user)
        this.$router.push('/')
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
      }
    },
    // Define all your needed mutations, here: auth/setUser
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>

<style>
.switch {
  display: inline-flex;
}
</style>