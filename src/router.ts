import { Component } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './routes/Dashboard.vue'
import Home from './routes/Home.vue'
import Posts from './routes/Posts.vue'
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
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/product',
    component: Product
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
