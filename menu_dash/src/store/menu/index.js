export default {
  actions: {},
  getters: {
    q: (state) => {
      if (state.filters.length > 0) {
        const filters = {}

        for (const filter of state.filters) {
          filters[`q[${filter.field}_${filter.operator}]`] = filter.value
        }

        return filters
      }
    }
  },
  mutations: {
    // FILTERS
    ADD_FILTER: (state, filter) => {
      state.filters.push(filter)
    },
    CLEAR_FILTERS: (state) => {
      state.filters = []
    },
    REMOVE_FILTER: (state, index) => {
      state.filters.splice(index, 1)
    }
  },
  namespaced: true,
  state: {
    filters: []
  }
}
