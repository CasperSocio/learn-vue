<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { NavItem } from '../../typings/interfaces'
import { NavMenu } from '../components'

export default defineComponent({
  components: {
    NavMenu
  },
  props: {
    brandName: {
      required: true,
      type: String
    },
    routes: {
      required: true,
      type: Array as PropType<NavItem[]>
    },
  }
})
</script>

<template>
<header class="Header flex flex-col flex-center">
  <div class="container flex flex-row">
    <h1 class="Header-brand">{{ brandName }}</h1>
    <NavMenu :routes="routes" row />
  </div>
</header>
</template>

<style scoped>
.Header {
  background-color: var(--primary);
  color: #fff;
  padding: 0 2rem;
}
.Header-brand {
  font-size: 2rem;
  font-weight: 600;
  padding: .6rem 0;
}
</style>
