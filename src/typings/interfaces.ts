import { TSize } from "./types";

export interface InventoryItem {
  id: number
  image: string
  name: string
  price: number
  quantity: number
  size: TSize
}

export interface NavItem {
  label: string
  path: string
  external?: boolean
}
