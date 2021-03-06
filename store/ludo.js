export const state = () => ({
    items: []
  })
  
  export const mutations = {
    setItems(state, items) {
      state.items = items
    },
    add(state, item) {
      const record = state.items.find(i => i.id === item.id)
  
      if (!record) {
        state.items.push({
          quantity: 1,
          ...item
        })
      } else {
        record.quantity++
      }
      this.$cookies.set('ludo', state.items)
    },
    remove(state, item) {
      const record = state.items.find(i => i.id === item.id)
  
      if (record.quantity > 1) {
        record.quantity--
      } else {
        const index = state.items.findIndex(i => i.id === item.id)
        state.items.splice(index, 1)
      }
      this.$cookies.set('ludo', state.items)
    },
    emptyList(state) {
      state.items = []
      this.$cookies.set('ludo', state.items)
    }
  }
  
  export const getters = {
    items: (state) => {
      return state.items
    },
    numberOfItems: (state) => {
      return state.items.reduce(
        (accumulator, item) => accumulator + item.quantity,
        0
      )
    }
  }