<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router'
import { NavItem } from '../../typings/interfaces'

type NavMenuAlign = 'center' | 'left' | 'right'

export default defineComponent({
  components: {
    RouterLink
  },
  props: {
    align: {
      default: 'center',
      required: false,
      type: String as PropType<NavMenuAlign>
    },
    routes: {
      required: true,
      type: Array as PropType<NavItem[]>
    },
    row: {
      default: false,
      required: false,
      type: Boolean
    }
  }
})
</script>

<template>
<nav :class="['NavMenu', row ? 'NavMenu-row' : 'NavMenu-col']">
  <ul class="NavMenu-list">
    <li v-for="route in routes" class="NavItem">
      <a
        v-if="route.external"
        class="NavItem-link"
        :href="route.path"
        target="_blank"
        rel="noopener noreferrer"
      >{{ route.label }}</a>
      <RouterLink
        v-else
        class="NavItem-link"
        :to="route.path"
      >{{ route.label }}</RouterLink>
    </li>
  </ul>
</nav>
</template>

<style>
.NavMenu {
  height: 100%;
  max-width: 100%;
  overflow: hidden;
}
.NavMenu-col {
  overflow-y: scroll;
}
.NavMenu-row {
  display: flex;
  margin: 0 auto;
  overflow-x: scroll;
  width: fit-content;
}

.NavMenu-list {
  list-style: none;
  margin: 0;
}
.NavMenu-col .NavMenu-list {
  flex-direction: column;
}
.NavMenu-row .NavMenu-list {
  display: flex;
  flex-direction: row;
}

.NavItem-link {
  color: inherit;
}
.NavItem-link:hover {
  background-color: rgba(0, 0, 0, .1);
  text-decoration: none;
}
.NavMenu-col .NavItem-link {
  display: block;
  padding: .4rem;
}
.NavMenu-row .NavItem-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: .4rem 1.2rem;
}
</style>
