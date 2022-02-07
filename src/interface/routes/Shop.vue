<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Card, DebugFrame } from '../components'
import { WrapperHeader } from '../sections'
import Search from '../../features/search/Search.vue'

export default defineComponent({
  components: {
    Card,
    DebugFrame,
    WrapperHeader,
    Search
  },
  setup() {
    const router = useRouter()

    function handleItemClick(id: number) {
      router.push({ path: `/shop/${id}` })
    }

    return {
      handleItemClick
    }
  }
})
</script>

<template>
<section>
  <Search />
</section>

<section class="Products">
  <header class="Products--header">
    <DebugFrame label=".Products--header" />
    <h2>Products</h2>
    <p v-if="$store.state.search.query.length > 0">"{{ $store.state.search.query }}"</p>
  </header>

  <div class="Inventory">
    <Card
      v-for="item in $store.state.search.matchingInventory"
      :title="item.name"
      :image="item.displayImage"
      @click="handleItemClick(item.id)"
    >
      <p class="Inventory--description">{{ item.description }}</p>
      <p class="Inventory--price">$ {{ item.displayPrice.toFixed(2) }}</p>
    </Card>
  </div>
</section>
</template>

<style>
.Products--header {
  align-items: baseline;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  position: relative;
}
.Products--header > * {
  margin: 0;
}
.Products--header p {
  font-size: 1rem;
  margin-left: 1rem;
  opacity: .6;
}

.Inventory {
  cursor: pointer;
  display: grid;
  gap: 1rem;
}
.Inventory > article:hover {
  border-color: var(--primary);
}

.Inventory--description {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3; 
   -webkit-box-orient: vertical;
}

.Inventory--price {
  font-size: 1.4rem;
  font-weight: 600;
}

@media screen and (min-width: 576px) {
  .Inventory {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 916px) {
  .Inventory {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
