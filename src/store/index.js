import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    query: '',
    results: [],
    total: 0,
    currentPage: 1,
    perPage: 10,
    loading: false,
  },
  mutations: {
    SET_QUERY(state, query) {
      state.query = query
    },
    SET_RESULTS(state, { items, total }) {
      state.results = items
      state.total = total
    },
    SET_PAGE(state, page) {
      state.currentPage = page
    },
    SET_LOADING(state, val) {
      state.loading = val
    }
  },
  actions: {
    async searchRepos({ commit, state }) {
      if (!state.query) {
        return
      }
      commit('SET_LOADING', true)
      try {
        const res = await axios.get(`https://api.github.com/search/repositories`, {
          params: {
            q: state.query,
            page: state.currentPage,
            per_page: state.perPage
          }
        })
        commit('SET_RESULTS', { items: res.data.items, total: res.data.total_count })
      } catch (error) {
        console.error(error)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
})
