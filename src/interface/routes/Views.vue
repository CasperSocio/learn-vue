<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { DebugFrame } from '../components'
import { FooterLayout, HeaderLayout, WrapperLayout } from '../layouts'

export default defineComponent({
  components: {
    DebugFrame,
    FooterLayout,
    HeaderLayout,
    RouterLink,
    WrapperLayout
  }
})
</script>

<template>
<HeaderLayout />

<WrapperLayout>
  
</WrapperLayout>

<FooterLayout />
</template>
