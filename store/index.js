export const actions = {
  nuxtClientInit({ commit }, context) {
    const user = this.$cookies.get('user')
    if (user) {
      commit('auth/setUser', user)
    }
    const cart = this.$cookies.get('cart')
    if (cart) {
      commit('cart/setItems', cart)
    }
  }
}


// import cookieparser from 'cookieparser'

// export const actions = {
//   nuxtServerInit({ commit }, { req }) {
//     let user = null
//     if (req && req.headers && req.headers.cookie) {
//       const parsed = cookieparser.parse(req.headers.cookie)
//       user = (parsed.user && JSON.parse(parsed.user)) || null
//     }

//     commit('auth/setUser', user)
//   }
// }
