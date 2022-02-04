<script lang="ts">
import { defineComponent } from 'vue'
import { TextSection } from '../sections'
import products from '../../data/inventory'

export default defineComponent({
  data: () => ({
    products
  }),
  components: {
    TextSection
  }
})
</script>

<template>
<h1>Home</h1>
<TextSection>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dignissimos dolor quidem commodi nesciunt odio deserunt optio doloribus labore quasi mollitia deleniti voluptate perferendis veritatis natus dolorum, enim necessitatibus aut!
</TextSection>
</template>

<style>
</style>
