<template>
  <section class="section">
    <div class="app-container box">
      <!-- App title -->
      <h1 class="title has-text-centered">Repositories</h1>

      <!-- Input field for search -->
      <SearchInput />

      <!-- Repository list display -->
      <RepoList />

      <!-- Pagination controls for navigating result pages -->
      <Pagination />
    </div>
  </section>
</template>

<script>
// Import child components
import SearchInput from './components/SearchInput.vue'
import RepoList from './components/RepoList.vue'
import PaginationControl from './components/PaginationControl.vue'

export default {
  // Register components for use in this template
  components: {
    SearchInput,          // Handles user input and triggers search
    RepoList,             // Displays repository results
    Pagination: PaginationControl  // Controls page navigation
  }
}
</script>

<style scoped>
/* Container for centering and sizing the app content */
.app-container {
  max-width: 800px;
  margin: 0 auto;
}

/* Outer section padding */
.section {
  padding: 2rem;
}

/* Title spacing */
.title {
  margin-bottom: 1.5rem;
}
</style>
