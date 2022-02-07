<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { DefaultView } from './interface/views'

export default defineComponent({
  setup() {
    const route = useRoute()
    console.log(route.name)
    return {
      route
    }
  },
  components: {
    DefaultView
  }
})
</script>

<template>
<router-view v-if="route.name === 'Views'" />

<DefaultView v-else>
  <router-view />
</DefaultView>
</template>
