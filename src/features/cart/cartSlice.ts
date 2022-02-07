import { Module } from 'vuex'
import { RootState } from '../../app/store';
import { Product } from '../../typings/interfaces';

export interface CartState {
  items: Product[]
}

export const cart: Module<CartState, RootState> = {
  state: {
    items: []
  },
  mutations: {
    cartAddItem(state: CartState, payload: Product) {
      state.items.push(payload)
    },
    cartRemoveItem(state: CartState, payload: Product) {
      state.items.filter(item => item.id !== payload.id)
    },
    cartReset(state: CartState) {
      state.items = []
    }
  }
}
