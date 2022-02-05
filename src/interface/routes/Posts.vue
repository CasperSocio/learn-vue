<script lang="ts">
import { defineComponent } from 'vue'
import { Card } from '../components'
import posts, { Post } from '../../data/posts'

interface PostsState {
  posts: Post[]
}

export default defineComponent({
  beforeMount() {
    this.loadPosts()
  },
  components: {
    Card
  },
  data: (): PostsState => ({
    posts: []
  }),
  methods: {
    loadPosts() {
      this.posts = posts.sort((a, b) => b.id - a.id)
    }
  }
})
</script>

<template>
<h1>Posts</h1>
<div class="posts flex">
  <Card
    v-for="post in posts"
    :heading="post.title"
    :key="post.id"
  >
    <p>{{ post.content }}</p>
  </Card>
</div>
</template>

<style scoped>
.posts {
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}
.posts > * {
  max-width: 25%;
}
</style>
