<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { dispatch, useStore } from '../../store'

export default defineComponent({
  setup() {
    const store = useStore()

    const searchQuery = computed({
      get() {
        return store.state.search.query
      },
      set(newValue: string) {
        dispatch('searchUpdateQuery', newValue)
      }
    })

    return {
      searchQuery
    }
  }
})
</script>

<template>
<input
  type="text"
  name="search"
  id="search"
  placeholder="Search"
  v-model="searchQuery"
>
</template>

<style scoped>
#search {
  border: 1px solid lightgray;
  border-radius: 10rem;
  font-size: 1rem;
  padding: .6rem 1.2rem;
}
</style>
