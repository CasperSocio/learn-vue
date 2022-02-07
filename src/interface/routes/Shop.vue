<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { dispatch, useStore } from '../../store'
import { Card } from '../components'
import { WrapperHeader } from '../sections'

export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()
    dispatch('inventoryLoadData')
  },
  components: {
    Card,
    WrapperHeader
  },
  methods: {
    handleItemClick(id: number) {
      this.$router.push({ path: `/shop/${id}` })
    }
  }
})
</script>

<template>
<section>
  <input
    type="text"
    name="search"
    id="search"
    placeholder="Search"
  >
</section>

<section>
  <h2>Products</h2>
  <div class="Inventory">
    <Card
      v-for="item in $store.state.inventory.items"
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
#search {
  border: 1px solid lightgray;
  border-radius: 10rem;
  font-size: 1rem;
  padding: .6rem 1.2rem;
}

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
