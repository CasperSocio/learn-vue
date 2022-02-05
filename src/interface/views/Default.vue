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
  :routes="[
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Posts', path: '/posts' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Product', path: '/product' },
    { label: 'GitHub', path: 'https://github.com/Socio-Development', external: true },
  ]"
  wide
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
