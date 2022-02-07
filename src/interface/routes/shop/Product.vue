<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import products from '../../../data/inventory'
import { Product } from '../../../typings/interfaces'

export default defineComponent({
  setup() {
    const route = useRoute()
    const target = products.find(item => item.id === Number(route.params.id))
    if (target !== null) {
      return {
        ...target
      }
    }
  },
  data: (): Product => ({
    id: 0,
    name: '',
    description: '',
    details: [],
    displayImage: '',
    displayPrice: 0,
    variants: []
  })
})
</script>

<template>
<div class="wrapper debug">
  <header>
    <h1>{{ name }}</h1>
  </header>
  <main class="content">
    <div class="left debug-teal">
      <img :src="displayImage" alt="">
    </div>
    <div class="right debug-teal">
      <p class="lead">{{ description }}</p>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    </div>
  </main>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.left {
  display: flex;
  flex-direction: column;
  width: 30%;
}
.left img {
  aspect-ratio: 1/1;
  width: 100%;
}
.right {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  width: 70%;
}
</style>
