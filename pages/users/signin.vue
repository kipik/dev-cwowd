<template>
  <section class="container">
    <div class="col-md-6 offset-md-3 mt-3">
      <form @submit.stop.prevent="handleSubmit"> 
        <legend class="legend">Connexion</legend>

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
              On y va !
            </v-btn>
            <span class="margin">
              <p>
                Pas encore de compte ?
                <router-link :to="{ name: 'users-register'}">
                  Je m'inscris
                </router-link>
              </p>
            </span>
          </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  data() {
    return {
      email: '',
      password: '',
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
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.login(
          this.email,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.push('/')
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
      }
    },
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>