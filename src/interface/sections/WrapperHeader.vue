<script lang="ts">
import { defineComponent } from 'vue'
import { DebugFrame } from '../components'

export default defineComponent({
  components: {
    DebugFrame
  }
})
</script>

<template>
<header class="Wrapper--header">
  <DebugFrame label=".Wrapper--header" />
  <h1>
    <slot></slot>
  </h1>
</header>
</template>

<style scoped>
.Wrapper--header {
  margin-top: 2rem;
  position: relative;
}
</style>
