<template>
  <div
      v-if="!isLastPage && total > 0">
    <nav class="pagination is-centered mt-4" role="navigation" aria-label="pagination">
      <button class="button is-link" @click="prevPage" :disabled="page <= 1">Prev</button>
      <span class="pagination next">{{ page }} of {{ Math.ceil(total / perPage) }}</span>
      <button class="button is-link ml-2" @click="nextPage" :disabled="isLastPage">Next</button>
    </nav>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState(['currentPage', 'total', 'perPage']),
    page() {
      return this.currentPage
    },
    isLastPage() {
      return this.page * this.perPage >= this.total
    }
  },
  methods: {
    ...mapMutations(['SET_PAGE']),
    ...mapActions(['searchRepos']),
    nextPage() {
      this.SET_PAGE(this.page + 1)
      this.searchRepos()
    },
    prevPage() {
      if (this.page > 1) {
        this.SET_PAGE(this.page - 1)
        this.searchRepos()
      }
    }
  }
}
</script>
