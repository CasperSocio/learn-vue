import { Module } from 'vuex'
import { Product } from '../../typings/interfaces'
import products from '../../data/inventory'
import { StoreAction } from '../../typings/types'
import { RootState } from '..'

export interface InventoryState {
  allItems: Product[]
}

export const inventory: Module<InventoryState, RootState> = {
  state: {
    allItems: []
  },
  mutations: {
    inventoryLoadData(state: InventoryState) {
      state.allItems = products
    }
  }
}
