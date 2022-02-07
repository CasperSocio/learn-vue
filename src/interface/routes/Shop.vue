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
<WrapperHeader>Shop</WrapperHeader>
<section>
  <h2>Products</h2>
  <div class="Products flex">
    <Card
      v-for="item in $store.state.inventory.items"
      :heading="item.name"
      :img="item.displayImage"
      @click="handleItemClick(item.id)"
    >
      <p class="Products-price">$ {{ item.displayPrice.toFixed(2) }}</p>
    </Card>
  </div>
</section>
</template>

<style>
.Products {
  flex-wrap: wrap;
  gap: 1rem;
}
.Products > * {
  max-width: 25%;
  cursor: pointer;
}
.Products > *:hover {
  outline: 1px solid var(--link);
}
.Products-price {
  font-size: 1.2rem;
  font-weight: 800;
}
</style>
