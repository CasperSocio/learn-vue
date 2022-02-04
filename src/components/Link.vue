<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    external: {
      default: false,
      required: false,
      type: Boolean
    },
    href: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    }
  }
})
</script>

<template>
<a
  :href="href"
  :target="external ? '_blank' : ''"
  :rel="external ? 'noopener noreferrer' : ''"
>
  {{ label }}
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
