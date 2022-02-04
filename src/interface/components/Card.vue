<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    heading: {
      required: false,
      type: String
    },
    img: {
      required: false,
      type: String
    },
    imgAlt: {
      required: false,
      type: String
    }
  }
})
</script>

<template>
<article class="Card flex flex-col">
  <main class="Card--content flex flex-col">
    <img
      v-if="img"
      class="Card--image"
      :src="img"
      :alt="imgAlt"
    >
    <h5 v-if="heading">{{ heading }}</h5>
    <slot></slot>
  </main>
</article>
</template>

<style>
.Card {
  --border: 1px solid lightgray;

  background-color: #fff;
  border: var(--border);
  border-radius: .25rem;
  min-width: 300px;
  padding: 0;
}
.Card > * {
  padding: 1rem;
}
.Card--content {
  gap: 1rem;
}
.Card--content p {
  margin: 0;
}
.Card--content h5 {
  font-size: 1.2rem;
  margin: 0;
}
</style>
