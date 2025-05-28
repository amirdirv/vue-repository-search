<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Repositories</h1>
      <SearchInput />
      <RepoList />
      <Pagination />
    </div>
  </section>
</template>

<script>
import SearchInput from './components/SearchInput.vue'
import RepoList from './components/RepoList.vue'
import PaginationControl from './components/PaginationControl.vue'

export default {
  components: {
    SearchInput,
    RepoList,
    Pagination: PaginationControl
  }
}
</script>
