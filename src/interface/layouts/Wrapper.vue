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
<div class="Wrapper">
  <DebugFrame label=".Wrapper" />

  <main class="Wrapper--content">
    <DebugFrame label=".Wrapper--content" />
    <slot></slot>
  </main>
</div>
</template>

<style scoped>
.Wrapper {
  height: 100%;
  padding: 0 1rem;
  position: relative;
  width: 100%;
}
.Wrapper--content {
  background-color: skyblue;
  height: 100%;
  margin: 0 auto;
  max-width: var(--page-width);
  position: relative;
  width: 100%;
}
</style>
