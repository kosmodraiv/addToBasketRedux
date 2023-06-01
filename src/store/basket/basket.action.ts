import { createAction } from '@reduxjs/toolkit'
import { basketSlice } from './basket.slice'

export const { addToBasket } = basketSlice.actions

export const updateQuantity = createAction<{
	itemId: number
	quantity: number
}>('basket/updateQuantity')

export const removeFromBasket = createAction<{ itemId: number }>(
	'basket/removeFromBasket'
)
