<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    quantity: 0
  })
})
</script>

<template>
<section class="flex flex-col flex-center debug">
  <div class="content">
    <p>Total items: {{ quantity }}</p>
  </div>
</section>
</template>

<style>
</style>
