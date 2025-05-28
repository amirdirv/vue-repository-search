<template>
  <div class="repo-list-container">
    <div v-if="loading" class="has-text-centered mt-5">
      <span class="icon is-large">
        <i class="fas fa-spinner fa-spin fa-3x"></i>
      </span>
    </div>
    <div v-else>
      <div
          v-if="results.length !== 0">
        <div
            class="repo-box cursor-pointer"
            v-for="repo in results"
            :key="repo.id"
        >
          <strong>{{ repo.full_name }}</strong><br/>
          ⭐ {{ repo.stargazers_count }} | 🍴 {{ repo.forks_count }}
          <p>{{ repo.description }}</p>
        </div>
      </div>
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
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['results', 'loading'])
  }
}
</script>

<style scoped>
.repo-list-container {
  min-height: 5rem;
  margin-top: 3rem;
}
.repo-box {
  padding: 1rem;
  border: 1px solid rgba(234, 234, 234, 0.24);
  border-radius: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
</style>