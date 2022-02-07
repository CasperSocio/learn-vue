import { Module } from 'vuex'
import { RootState } from '..'
import products from '../../data/inventory'
import { Product } from '../../typings/interfaces'

export interface InventoryState {
  items: Product[]
}

export const inventory: Module<InventoryState, RootState> = {
  state: {
    items: []
  },
  mutations: {
    inventoryLoadData(state: InventoryState) {
      state.items = products
    }
  }
}
