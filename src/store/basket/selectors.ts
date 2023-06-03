import { RootState } from '../store'
import { BasketItem } from './types'

export const selectBasketItems = (state: RootState): BasketItem[] =>
	state.basket.items
