<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    brandName: {
      required: true,
      type: String
    }
  }
})
</script>

<template>
  <header>
    <h1>{{ brandName }}</h1>
  </header>
</template>

<style scoped>
header {
  background-color: var(--primary);
  color: #fff;
}
h1 {
  font-size: 2rem;
  font-weight: 600;
  padding: .6rem 2rem;
}
</style>
