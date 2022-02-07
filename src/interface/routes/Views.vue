<script lang="ts">
import { defineComponent, ref } from 'vue'
import { FooterLayout, HeaderLayout, WrapperLayout } from '../layouts'

export default defineComponent({
  components: {
    FooterLayout,
    HeaderLayout,
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
