<template>
  <!-- Main container for the repository list -->
  <div class="repo-list-container">

    <!-- Loading spinner shown while data is being fetched -->
    <div v-if="loading" class="has-text-centered mt-5">
      <font-awesome-icon icon="spinner" class="fa-spin" />
    </div>

    <!-- Content shown after loading is finished -->
    <div v-else>

      <!-- When there are search results -->
      <div v-if="results.length !== 0">
        <!-- Loop through each repository and display its basic info -->
        <div
            class="repo-box cursor-pointer"
            v-for="repo in results"
            :key="repo.id"
        >
          <!-- Repository name -->
          <strong>{{ repo.full_name }}</strong><br/>

          <!-- Stars and forks -->
          ⭐ {{ repo.stargazers_count }} | 🍴 {{ repo.forks_count }}

          <!-- Repository description -->
          <p>{{ repo.description }}</p>
        </div>
      </div>

      <!-- Message shown when there are no results -->
      <div
          v-if="results.length === 0"
          class="has-text-grey has-text-centered is-size-5 my-6"
      >
        No result
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default {
  // Register FontAwesomeIcon for use in the template
  components: { FontAwesomeIcon },

  // Computed properties from Vuex store
  computed: {
    ...mapState([
      'results', // Array of repositories
      'loading'  // Boolean indicating loading state
    ])
  }
}
</script>

<style scoped>
/* Container for the whole list */
.repo-list-container {
  min-height: 5rem; /* Ensures visual structure even when list is empty */
  margin-top: 2rem;
}

/* Style for each repo box */
.repo-box {
  padding: 1rem;
  border: 1px solid rgba(234, 234, 234, 0.24);
  border-radius: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
</style>
