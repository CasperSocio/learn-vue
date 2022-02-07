import { Component } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import {
  DashboardRoute,
  HomeRoute,
  PostsRoute,
  ProductRoute,
  ShopProductRoute,
  ShopRoute,
  ViewsRoute
} from './interface/routes'

interface Route {
  component: Component
  name?: string
  path: string
}

interface MainRoute extends Route {
  children?: Route[]
}

const routes: MainRoute[] = [
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
  },
  {
    path: '/shop/:id',
    component: ShopProductRoute
  },
  {
    name: 'Views',
    path: '/views',
    component: ViewsRoute
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
