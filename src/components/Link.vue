<script lang="ts">
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    props: {
      href: String,
      label: String
    }
  })
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
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
