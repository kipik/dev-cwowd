<template>
<div class="card sticky">
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="game in selectedGames"
                :key="game.id">
                <td class="width-1-2">{{ dish.name }}</td>
                <td>
                  <a class="left"><span class="badge" @click="addToLudo(game)">+</span></a>
                  <a><span class="badge" style="background: #f0506e;" @click="removeFromLudo(game)">-</span></a>
                </td>
            </tr>
        </tbody>
    </table>

    <button class="button-primary" name="button">Process to checkout</button>

</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
      computed: {
    id() {
      return this.$route.params.id
    },
    selectedDishes() {
      return this.$store.getters['ludo/items']
    },
    numberOfItems() {
      return this.$store.getters['ludo/numberOfItems']
    }
  },
  methods:{
    ...mapMutations({
      addToCart: 'ludo/add',
      removeFromCart: 'ludo/remove'
    })
  }
}
</script>