<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    heading: {
      required: false,
      type: String
    },
  }
})
</script>

<template>
<article class="Card flex flex-col">
  <main class="Card--content flex flex-col">
    <h5 v-if="heading">{{ heading }}</h5>
    <slot></slot>
  </main>
</article>
</template>

<style>
.Card {
  --border: 1px solid slategray;

  border: var(--border);
  border-radius: .25rem;
  padding: 0;
}
.Card > * {
  padding: 1rem;
}
.Card--content {
  gap: 1rem;
}
.Card--content p {
  line-height: 1;
  margin: 0;
}
.Card--content h5 {
  font-size: 1.2rem;
  margin: 0;
}
</style>
