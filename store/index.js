export const actions = {
  nuxtClientInit({ commit }, context) {
    const user = this.$cookies.get('user')
    if (user) {
      commit('auth/setUser', user)
    }
    const ludo = this.$cookies.get('ludo')
    if (ludo) {
      commit('ludo/setItems', ludo)
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
