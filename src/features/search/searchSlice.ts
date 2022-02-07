import { Module } from 'vuex'
import { RootState } from '../../store'
import inventory from '../../data/inventory'
import { Product } from '../../typings/interfaces'

export interface SearchState {
  matchingInventory: Product[]
  query: string
}

export const search: Module<SearchState, RootState> = {
  state: {
    matchingInventory: inventory,
    query: ''
  },
  mutations: {
    searchUpdateQuery(state: SearchState, payload: string) {
      state.query = payload
      state.matchingInventory = inventory.filter(item => {
        const searchWords: string = item.name + ' ' + item.description
        return searchWords.toLowerCase().match(payload.toLowerCase())
      })
    }
  }
}
