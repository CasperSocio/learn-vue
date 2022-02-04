<script lang="ts">
import { defineComponent } from 'vue'
import { DefaultView } from '../interface/views'
import { Card } from '../interface/components'

export default defineComponent({
  components: {
    Card,
    DefaultView
  }
})
</script>

<template>
<DefaultView>
  <h1>Posts</h1>
  <div class="posts flex flex-col">
    <Card>
      <p>Is this working?</p>
    </Card>
    <Card heading="Card Heading">
      <p>Is this working?</p>
    </Card>
  </div>
</DefaultView>
</template>

<style scoped>
.posts {
  gap: 1rem;
  margin-top: 2rem;
  max-width: 450px;
}
</style>
