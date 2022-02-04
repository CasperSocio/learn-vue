import { Component } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import {
  DashboardRoute,
  HomeRoute,
  PostsRoute,
  ProductRoute,
  ShopRoute
} from './interface/routes'

interface Route {
  component: Component
  name: string
  path: string
}

const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    component: HomeRoute
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: DashboardRoute
  },
  {
    name: 'Posts',
    path: '/posts',
    component: PostsRoute
  },
  {
    name: 'Product',
    path: '/product',
    component: ProductRoute
  },
  {
    name: 'Shop',
    path: '/shop',
    component: ShopRoute
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
