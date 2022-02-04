<script lang="ts">
import { defineComponent } from 'vue'
import { Card } from '../components'
import products from '../../data/inventory'

export default defineComponent({
  components: {
    Card
  },
  data: () => ({
    products
  })
})
</script>

<template>
<h1>Shop</h1>
<section>
  <h2>Products</h2>
  <div class="Products flex">
    <Card
      v-for="product in products"
      :heading="product.name"
      :img="product.displayImage"
    >
      <p class="Products-price">$ {{ product.displayPrice.toFixed(2) }}</p>
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
