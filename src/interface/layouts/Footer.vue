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
<footer class="Footer">
  <DebugFrame label=".Footer" />

  <div class="Footer--content">
    <DebugFrame label=".Footer--content" />

  </div>
</footer>
</template>

<style scoped>
.Footer {
  background-color: aquamarine;
  height: 120px;
  margin-top: auto;
  padding: 0 1rem;
  position: relative;
  width: 100%;
}
.Footer--content {
  background-color: rgba(0, 0, 0, .1);
  height: 100%;
  margin: 0 auto;
  max-width: var(--page-width);
  position: relative;
  width: 100%;
}
</style>
