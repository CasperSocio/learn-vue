<script lang="ts">
import { defineComponent } from 'vue'
import { DebugFrame } from '.'

export default defineComponent({
  components: {
    DebugFrame
  },
  props: {
    title: {
      required: false,
      type: String
    },
    image: {
      required: false,
      type: String
    },
    imageAlt: {
      required: false,
      type: String
    }
  }
})
</script>

<template>
<article class="Card">
  <DebugFrame label=".Card" />

  <!-- Image -->
  <div
    v-if="image"
    class="Card--image"
  >
    <DebugFrame label=".Card--image" />
    <img :src="image" :alt="imageAlt">
  </div>

  <!-- Title -->
  <header
    v-if="title"
    class="Card--title"
  >
    <DebugFrame label=".Card--title" />
    <h5>{{ title }}</h5>
  </header>

  <!-- Content -->
  <div class="Card--content">
    <DebugFrame label=".Card--content" />
    <slot></slot>
  </div>
</article>
</template>

<style>
.Card {
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  position: relative;
}

.Card--image {
  display: flex;
  position: relative;
}
.Card--image img {
  border-radius: .25rem;
  max-width: 100%;
}

.Card--title {
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
}
.Card--title h5 {
  font-size: 1.4rem;
  margin: 0;
}

.Card--content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: auto;
  position: relative;
}
.Card--content > * {
  margin: 0;
}
</style>
