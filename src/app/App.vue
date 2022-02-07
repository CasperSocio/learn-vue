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
<router-view v-if="$route.name === 'Views'" />

<DefaultView v-else>
  <router-view />
</DefaultView>
</template>
