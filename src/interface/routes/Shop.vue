<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { dispatch, useStore } from '../../store'
import { Card } from '../components'
import { WrapperHeader } from '../sections'
import Search from '../../features/search/Search.vue'

export default defineComponent({
  components: {
    Card,
    WrapperHeader,
    Search
  },
  setup() {
    const router = useRouter()
    const store = useStore()

    const inventory = ref(store.state.search.matchingInventory)

    function handleItemClick(id: number) {
      router.push({ path: `/shop/${id}` })
    }

    return {
      handleItemClick,
      inventory
    }
  }
})
</script>

<template>
<section>
  <Search />
</section>

<section>
  <h2>Products</h2>
  <div class="Inventory">
    <Card
      v-for="item in $store.state.search.matchingInventory"
      :title="item.name"
      :image="item.displayImage"
      @click="handleItemClick(item.id)"
    >
      <p class="Inventory--price">$ {{ item.displayPrice.toFixed(2) }}</p>
    </Card>
  </div>
</section>
</template>

<style>
.Inventory {
  cursor: pointer;
  display: grid;
  gap: 1rem;
}
.Inventory > article:hover {
  border-color: var(--primary);
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
