// Import necessary modules
import { createStore } from 'vuex'
import axios from 'axios'

// Export the Vuex store
export default createStore({
  // Centralized application state
  state: {
    query: '',            // Current search query
    results: [],          // Array of repository results
    total: 0,             // Total number of search results from API
    currentPage: 1,       // Current page number for pagination
    perPage: 10,          // Number of results to fetch per page
    loading: false        // Loading state to manage spinner visibility
  },

  // Synchronous state modifiers
  mutations: {
    // Set the current search query
    SET_QUERY(state, query) {
      state.query = query
    },

    // Set the fetched results and total count
    SET_RESULTS(state, { items, total }) {
      state.results = items
      state.total = total
    },

    // Set the current page number
    SET_PAGE(state, page) {
      state.currentPage = page
    },

    // Set loading state (true when fetching data, false when done)
    SET_LOADING(state, val) {
      state.loading = val
    }
  },

  // Asynchronous actions for data fetching and committing mutations
  actions: {
    async searchRepos({ commit, state }) {
      // Prevent API call if search query is empty
      if (!state.query) {
        return
      }

      // Set loading to true before API call starts
      commit('SET_LOADING', true)

      try {
        // Call GitHub API with current query and pagination settings
        const res = await axios.get(`https://api.github.com/search/repositories`, {
          params: {
            q: state.query,
            page: state.currentPage,
            per_page: state.perPage
          }
        })

        // Commit results to the store
        commit('SET_RESULTS', {
          items: res.data.items,
          total: res.data.total_count
        })

      } catch (error) {
        // Log any error from the API call
        console.error(error)
      } finally {
        // Always stop loading after the API call completes
        commit('SET_LOADING', false)
      }
    }
  }
})
