<script lang="ts">
import { defineComponent } from 'vue'
import { DefaultView } from '../interface/views'

export default defineComponent({
  components: {
    DefaultView
  }
})
</script>

<template>
<DefaultView>
  <router-view />
</DefaultView>
</template>
