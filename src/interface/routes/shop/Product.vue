<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import products from '../../../data/inventory'
import { WrapperHeader } from '../../sections'

export default defineComponent({
    setup() {
        const route = useRoute();
        const product = products.find(item => item.id === Number(route.params.id));
        return {
            product
        };
    },
    components: { WrapperHeader }
})
</script>

<template>
<div class="Product">
  <div class="Product-left">
    <img :src="product?.displayImage" alt="">
  </div>
  <div class="Product-right">
    <WrapperHeader>{{ product?.name }}</WrapperHeader>

    <select name="size" id="size">
      <option value="xs">XS</option>
      <option value="s">S</option>
      <option value="m" selected>M</option>
      <option value="l">L</option>
      <option value="XL">XL</option>
    </select>

    <p class="Product--description">{{ product?.description }}</p>
  </div>
</div>
</template>

<style scoped>
.Wrapper {
  background-color: #fff;
}
.Product {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.Product-left {
}
.Product-left img {
  max-width: 100%;
}

#size {
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: .25rem;
  font-size: 1rem;
  margin-top: 1rem;
  padding: .4rem;
  text-align: center;
  width: 100%;
}
#size option {
  font-size: .8rem;
}

.Product--description {
  margin-top: 3rem;
}
</style>
