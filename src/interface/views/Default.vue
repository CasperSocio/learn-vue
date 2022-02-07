<script lang="ts">
import { defineComponent } from 'vue'
import { HeaderLayout, WrapperLayout } from '../layouts'

export default defineComponent({
  components: {
    HeaderLayout,
    WrapperLayout
  }
})
</script>

<template>
<HeaderLayout />

<WrapperLayout>
  <slot></slot>
</WrapperLayout>
</template>
