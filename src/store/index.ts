import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { StoreAction } from '../typings/types'
import { cart, CartState } from './modules/cart'
import { inventory, InventoryState } from './modules/inventory'

export interface RootState {
  cart: CartState
  inventory: InventoryState
}

export const key: InjectionKey<Store<RootState>> = Symbol()

const modules = {
  cart,
  inventory
}

export const store = createStore<RootState>({
  modules
})

export function useStore() {
  return baseUseStore(key)
}

/**
 * A dispatcher that takes pre-defined actions.  
 * See `src/typings/types.ts` for the available actions.
 * @param action Pre-defined actions
 */
export function dispatch(action: StoreAction, payload?: any) {
  return store.commit(action, payload)
}
