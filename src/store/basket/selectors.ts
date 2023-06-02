import { RootState } from '../store'
import { BasketItem } from './basketSlice'

export const selectBasketItems = (state: RootState): BasketItem[] =>
	state.basket.items
