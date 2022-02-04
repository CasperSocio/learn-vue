<script lang="ts">
import { defineComponent } from 'vue'
import { TSize } from '../../typings/types'
import Cart from '../../features/cart/Cart.vue'
import { Button, Link } from '../components'

type Size = SizeObject[]

interface SizeObject {
  selected: boolean
  value: TSize
}

interface RootState {
  cart: number
  description: string
  details: string[]
  image: string
  inventory: number
  onSale: boolean
  product: string
  sizes: Size
  stockStatus: string
  storeLink: string
  variants: any
}

export default defineComponent({
  data: (): RootState => ({
    cart: 0,
    description: "These Vue socks will make sure you're looking stylish while creating the future",
    details: ["50% cotton", "30% wool", "20% polyester"],
    image: "./src/assets/images/socks_green.jpg",
    inventory: 12,
    onSale: false,
    product: "Socks",
    sizes: [
      {
        value: "xs",
        selected: false
      },
      {
        value: "s",
        selected: false
      },
      {
        value: "m",
        selected: true
      },
      {
        value: "l",
        selected: false
      },
      {
        value: "xl",
        selected: false
      }
    ],
    stockStatus: "",
    storeLink: "https://www.redbubble.com/shop/vue",
    variants: [
      {
        id: 2234,
        color: "green",
        image: "./src/assets/images/socks_green.jpg"
      },
      {
        id: 2235,
        color: "blue",
        image: "./src/assets/images/socks_blue.jpg"
      }
    ]
  }),
  computed: {
    inStock(): string {
      const currentInventory = this.inventory - this.cart;
      if (currentInventory > 10) {
        this.stockStatus = "success";
        return "In stock";
      }
      if (currentInventory <= 10 && currentInventory > 0) {
        this.stockStatus = "warning";
        return "Almost out of stock";
      }
      this.stockStatus = "danger";
      return "Out of stock";
    }
  },
  methods: {
    addToCart() {
      if (this.inventory - this.cart > 0) {
        this.cart++
      }
    },
    resetCart() {
      this.cart = 0;
    },
    updateImage(path: string) {
      this.image = path;
    },
    updateSize(sizeValue: TSize) {
      this.sizes = this.sizes.map(size => ({
        ...size,
        selected: size.value === sizeValue ? true : false
      }));
    }
  },
  components: {
    Button,
    Cart,
    Link,
}
})
</script>

<template>
<aside class="top flex flex-row flex-end">
  <!-- Cart -->
  <div
    class="cart flex flex-row flex-middle"
    :class="(cart < 1) && 'hide'"
  >
    <p>Cart ({{ cart }})</p>
    <!-- Delete cart -->
    <button class="btn-delete" @click="resetCart">
      <img src="https://cdn.iconscout.com/icon/free/png-128/close-1767458-1502528.png" alt="">
    </button>
  </div>
</aside>

<main class="product-display flex flex-col flex-center">
  <div class="product-container flex flex-row">

    <!-- Layout left -->
    <section class="product-image flex flex-col flex-center">

      <!-- Image -->
      <img :src="image" alt="Socks">

      <!-- Color selector -->
      <div class="color-selector flex flex-row">
        <div
          v-for="variant in variants"
          :class="['color-selector-item', variant.color]"
          :key="variant.id"
          @click="updateImage(variant.image)"
        ></div>
      </div>

      <!-- Add to cart -->
      <Button
        label="Add to cart"
        shape="pill"
        size="lg"
        theme="primary"
        :disabled="inventory - cart < 1"
        @click="addToCart"
      />
    </section>

    <section class="product-info flex flex-col">
      <!-- Header -->
      <header class="product-header flex flex-row flex-space flex-top">
        <!-- Title -->
        <h1>{{ product }}</h1>

        <!-- In stock -->
        <p
          :class="['stock uppercase', stockStatus]"
        >{{ inStock }}</p>
      </header>

      <!-- Description -->
      <p class="lead">{{ description }}</p>

      <!-- External link -->
      <p>
        See more Vue products on
        <Link
          href="https://www.redbubble.com/shop/vue"
          label="Redbubble"
          external
        />
      </p>

      <!-- On sale -->
      <p v-if="onSale">On sale!</p>

      <!-- Details -->
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <!-- Size -->
      <ul class="size flex flex-row">
        <li
          v-for="size in sizes"
          :class="['size-item text-center', size.selected && 'active']"
          @click="updateSize(size.value)"
        >
          {{ size.value.toUpperCase() }}
        </li>
      </ul>

    </section>
  </div>
</main>
<Cart />
</template>

<style scoped>
main {
  height: 100%;
  padding: 2rem;
}

.product-container {
  gap: 3rem;
  max-width: var(--page-width);
}
.product-image {
  max-width: 300px;
}
</style>
