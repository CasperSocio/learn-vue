import { TSize } from './types'

export interface NavItem {
  label: string
  path: string
  external?: boolean
}

export interface Product {
  description?: string
  details?: string[]
  displayImage: string
  displayPrice: number
  id: number
  name: string
  variants: ProductVariant[]
}

interface ProductVariant {
  color?: string
  id: number
  image: string
  price?: number
  quantity: number
  size?: TSize
}
