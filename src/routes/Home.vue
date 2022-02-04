<script lang="ts">
import { defineComponent } from 'vue'
import { DefaultView } from '../interface/views'
import { TextSection } from '../interface/sections'

export default defineComponent({
  components: {
    DefaultView,
    TextSection
  }
})
</script>

<template>
<DefaultView>
  <h1>Home</h1>
  <TextSection>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dignissimos dolor quidem commodi nesciunt odio deserunt optio doloribus labore quasi mollitia deleniti voluptate perferendis veritatis natus dolorum, enim necessitatibus aut!
  </TextSection>
</DefaultView>
</template>
