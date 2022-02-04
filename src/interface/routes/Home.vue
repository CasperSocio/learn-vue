<script lang="ts">
import { defineComponent } from 'vue'
import { NavMenu } from '../components'
import { TextSection } from '../sections'
import products from '../../data/inventory'

interface State {}

export default defineComponent({
  data: () => ({
    products,
    routes: [
      {  }
    ]
  }),
  components: {
    NavMenu,
    TextSection
}
})
</script>

<template>
<h1>Home</h1>
<TextSection>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dignissimos dolor quidem commodi nesciunt odio deserunt optio doloribus labore quasi mollitia deleniti voluptate perferendis veritatis natus dolorum, enim necessitatibus aut!
</TextSection>
<section class="Navigation">
  <NavMenu
    :routes="[
      { label: 'Home', path: '/' },
      { label: 'Shop', path: '/shop' },
    ]"
    row
  />
</section>
<section class="Navigation">
  <NavMenu
    :routes="[
      { label: 'Home', path: '/' },
      { label: 'Shop', path: '/shop' },
      { label: 'Home', path: '/' },
      { label: 'Shop', path: '/shop' },
      { label: 'Home', path: '/' },
      { label: 'Shop', path: '/shop' },
      { label: 'Home', path: '/' },
      { label: 'Shop', path: '/shop' },
    ]"
    row
  />
</section>
<section class="Navigation">
  <NavMenu
    :routes="[
      { label: 'Home ksadlfasd ', path: '/' },
      { label: 'Shop', path: '/shop' },
      { label: 'Home', path: '/' },
      { label: 'Shop', path: '/shop' },
    ]"
  />
</section>
</template>

<style>
.Navigation {
  background-color: var(--primary);
  border: 2px solid aquamarine;
  color: #fff;
  height: 6rem;
  margin: 2rem auto;
  width: 50%;
}
</style>
