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
        const searchWords = (item.name.toLowerCase() + ' ' + item.description?.toLowerCase()).split(' ').filter((value, index, arr) => {
          return arr.indexOf(value) === index
        }).join(' ')
        return searchWords.match(payload.toLowerCase())
      })
    }
  }
}
