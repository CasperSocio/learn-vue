<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    external: {
      default: false,
      required: false,
      type: Boolean
    },
    to: {
      required: true,
      type: String
    }
  }
})
</script>

<template>
<a
  :href="to"
  :target="external ? '_blank' : ''"
  :rel="external ? 'noopener noreferrer' : ''"
>
  <slot></slot>
</a>
</template>

<style>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
