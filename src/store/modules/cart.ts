import { Module } from 'vuex'

export interface CartState {
  totalItems: number
}

export const cart: Module<CartState, any> = {
  state: {
    totalItems: 0
  },
  mutations: {
    increment(state: CartState) {
      state.totalItems++
    },
    reset(state: CartState) {
      state.totalItems = 0
    }
  }
}
