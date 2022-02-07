<script lang="ts">
import { defineComponent } from 'vue'
import { NavMenu } from '../components'
import { TextSection } from '../sections'

export default defineComponent({
  components: {
    NavMenu,
    TextSection
  }
})
</script>

<template>
<h1>Home</h1>
<p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dignissimos dolor quidem commodi nesciunt odio.</p>

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
