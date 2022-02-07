<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import products from '../../../data/inventory'
import { WrapperHeader } from '../../sections'
import { Button } from '../../components'

export default defineComponent({
  components: {
    Button,
    WrapperHeader
  },
  setup() {
    const route = useRoute();
    const product = products.find(item => item.id === Number(route.params.id));
    return {
      product
    };
  }
})
</script>

<template>
<div class="Product">
  <div class="Product-left">
    <img :src="product?.displayImage" alt="">
  </div>
  <div class="Product-right">
    <WrapperHeader>{{ product?.name }}</WrapperHeader>

    <div class="row">
      <select name="size" id="size">
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m" selected>M</option>
        <option value="l">L</option>
        <option value="XL">XL</option>
      </select>

      <Button
        label="Add to cart"
        shape="pill"
        theme="success"
      />
    </div>

    <p class="Product--description">{{ product?.description }}</p>
  </div>
</div>
</template>

<style>
.Product {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100%;
}

.Product-left {
  display: flex;
}
.Product-left img {
  max-width: 100%;
}

.Product-right {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.Product-right button {
  align-self: center;
  width: 100%;
}
.Product-right h1 {
  font-size: 2rem;
}
.Product-right .row {
  margin-top: 2rem;
}

#size {
  align-self: center;
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: .25rem;
  font-size: 1rem;
  padding: .4rem;
  text-align: center;
  width: 4rem;
}
#size option {
  font-size: .8rem;
}

.Product--description {
  margin-top: 2rem;
}

@media screen and (min-width: 916px) {
  .Product {
    flex-direction: row;
  }
  .Product-right {
    min-width: 50%;
    text-align: left;
  }
  .Product-right button {
    margin-top: auto;
    width: fit-content;
  }
  .Product-right h1 {
    font-size: 3rem;
  }

  #size {
    align-self: flex-start;
  }
}
</style>
