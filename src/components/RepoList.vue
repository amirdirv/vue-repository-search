<template>
  <div>
    <div v-if="loading" class="has-text-centered mt-5">
      <progress class="progress is-small is-primary" max="100">Loading</progress>
    </div>
    <div v-else>
      <div
          class="box"
          v-for="repo in results"
          :key="repo.id"
      >
        <strong>{{ repo.full_name }}</strong><br />
        ⭐ {{ repo.stargazers_count }} | 🍴 {{ repo.forks_count }}
        <p>{{ repo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['results', 'loading'])
  }
}
</script>
