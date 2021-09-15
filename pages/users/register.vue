<template>
    <div class="uk-grid">
        <form @submit.stop.prevent="handleSubmit">
            <fieldset class="fieldset">
                <legend class="legend">Register</legend>

                <div class="margin">
                    <label class="form-label">Username</label>
                    <input v-model="username" class="input" type="text" placeholder="Jean Kul">
                </div>

                      <div class="margin">
                        <label class="form-label" for="form-stacked-text">Email</label>
                        <input v-model="email" class="input" type="email" placeholder="jean.kul@gmail.com">
                      </div>

                      <div class="margin">
                        <label class="form-label" for="form-stacked-text">Password</label>
                        <input v-model="password" class="input" type="password">
                      </div>

                      <div class="margin">
                        <button class="button-primary" :disabled="loading" type="submit">Submit</button>
                      </div>

                      <div class="margin">
                        <p>
                          Already have an account?
                          <router-link :to="{ name: 'users-signin'}">
                            Login
                          </router-link>
                        </p>
                      </div>

            </fieldset>
        </form>
    </div>
</template>

<script>
// Import mapMutations in order to call mutations from your store
import { mapMutations } from 'vuex'
import strapi from '~/utils/Strapi'

export default {
  data() {
    return {
      email: '',
      password: '',
      username: '',
      loading: false
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
        this.$router.go(-1)
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
