import { Module } from 'vuex'
import { RootState } from '../../app/store'

export interface AuthState {
  user: any
}

export const auth: Module<AuthState, RootState> = {
  state: {
    user: null
  },
  mutations: {}
}
