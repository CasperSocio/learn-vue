<script lang="ts">
import { defineComponent } from 'vue'
import { HeaderLayout } from '../layouts'

export default defineComponent({
  props: {
    noHeader: {
      default: false,
      required: false,
      type: Boolean
    }
  },
  components: {
    HeaderLayout
  }
})
</script>

<template>
<HeaderLayout
  v-if="!noHeader"
  brand-name="Socio"
/>

<main class="flex flex-col flex-center">
  <div class="container">
    <slot></slot>
  </div>
</main>
</template>

<style scoped>
main {
  margin: 2rem 1rem;
}
</style>
