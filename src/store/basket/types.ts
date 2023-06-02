export interface Product {
	id: number
	name: string
	price: number
	image: string
}

export interface BasketItem {
	id: number
	quantity: number
	product: Product
}

export interface BasketState {
	items: BasketItem[]
}
