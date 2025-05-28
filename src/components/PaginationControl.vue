<template>
  <!-- Pagination only appears if we're not on the last page and there are results -->
  <div
      class="pagination-container is-centered"
      v-if="!isLastPage && total > 0"
  >
    <!-- Bulma styled pagination component -->
    <nav class="pagination is-centered mt-4" role="navigation" aria-label="pagination">
      <!-- "Previous" button; disabled if already on first page -->
      <button class="button is-link" @click="prevPage" :disabled="page <= 1">Prev</button>

      <!-- Current page indicator -->
      <span class="pagination next">{{ page }} of {{ Math.ceil(total / perPage) }}</span>

      <!-- "Next" button; disabled if already on last page -->
      <button class="button is-link ml-2" @click="nextPage" :disabled="isLastPage">Next</button>
    </nav>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  // Computed properties for reactive binding with Vuex state
  computed: {
    // Map needed pieces of state from Vuex store
    ...mapState(['currentPage', 'total', 'perPage']),

    // Alias to make currentPage more semantic in this component
    page() {
      return this.currentPage
    },

    // Check if the current page is the last page
    isLastPage() {
      return this.page * this.perPage >= this.total
    }
  },

  // Methods for handling pagination logic
  methods: {
    // Vuex mutation to change the current page
    ...mapMutations(['SET_PAGE']),

    // Vuex action to re-fetch repositories after changing page
    ...mapActions(['searchRepos']),

    // Move to the next page and trigger a new search
    nextPage() {
      this.SET_PAGE(this.page + 1)
      this.searchRepos()
    },

    // Move to the previous page and trigger a new search
    prevPage() {
      if (this.page > 1) {
        this.SET_PAGE(this.page - 1)
        this.searchRepos()
      }
    }
  }
}
</script>

<style scoped>
/* Styles scoped to this component */
.pagination-container {
  margin-top: 2rem;

  .pagination {
    max-width: 15rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
}
</style>
