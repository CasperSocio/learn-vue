<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../../app/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const state = store.state.cart

    return {
      state
    }
  }
})
</script>

<template>
<section class="flex flex-col flex-center debug">
  <div class="content">
    <p>Total items: {{ state.items.length }}</p>
  </div>
</section>
</template>

<style>
</style>
