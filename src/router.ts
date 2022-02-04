import { Component } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './routes/Dashboard.vue'
import Home from './routes/Home.vue'
import Product from './routes/Product.vue'

interface Route {
  component: Component
  path: string
}

const routes: Route[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/dashboard',
    component: Dashboard
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
