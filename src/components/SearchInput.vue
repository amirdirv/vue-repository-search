<template>
  <div class="field">
    <div class="control">
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
      searchText: ''
    }
  },
  methods: {
    ...mapMutations(['SET_QUERY', 'SET_PAGE']),
    ...mapActions(['searchRepos']),
    handleSearch() {
      this.SET_QUERY(this.searchText)
      this.SET_PAGE(1)
      this.searchRepos()
    }
  }
}
</script>
