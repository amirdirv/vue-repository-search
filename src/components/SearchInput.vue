<template>
  <!-- Input field container -->
  <div class="field">
    <div class="control">
      <!-- Search input bound with v-model to searchText -->
      <input
          class="input is-medium"
          type="text"
          placeholder="Type to search.."
          v-model="searchText"
          @keyup.enter="handleSearch"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      // Local input state bound to the input field
      searchText: ''
    }
  },
  methods: {
    // Map Vuex mutations and actions for state management
    ...mapMutations(['SET_QUERY', 'SET_PAGE']),
    ...mapActions(['searchRepos']),

    // Called when user presses Enter
    handleSearch() {
      // Update Vuex state with current search text
      this.SET_QUERY(this.searchText)

      // Reset to page 1 whenever a new search is made
      this.SET_PAGE(1)

      // Trigger the search action (fetch data from API)
      this.searchRepos()
    }
  }
}
</script>
