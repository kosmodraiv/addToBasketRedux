import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToBasket } from '../../store/basket/basketSlice'
import { selectBlured } from '../../store/blure/selectors'
import {
	ProductText,
	ProductList,
	Product,
	ImagesSpace,
	Image,
	BotSpace,
	ProductName,
	ProductPrice,
	AddTo,
	ButtonText,
	Button,
	InputAmount,
	MainContainer
} from './styled'

interface GoodsItem {
	id: number
	image: string
	price: number
	name: string
}

const GoodsList: React.FC = () => {
	const dispatch = useDispatch()
	const blured = useSelector(selectBlured)

	const [list, setList] = useState<GoodsItem[]>([])
	const [quantities, setQuantities] = useState<number[]>([])

	useEffect(() => {
		fetch('https://6468dbba60c8cb9a2cb3d6dc.mockapi.io/shop/list')
			.then(res => res.json())
			.then(json => {
				setList(json)
			})
			.catch(() => {
				alert('Not found')
			})
	}, [])

	function handleQuantityChange(
		e: React.ChangeEvent<HTMLInputElement>,
		goods: GoodsItem
	) {
		const newQuantities = [...quantities]
		const newValue = parseInt(e.target.value)

		if (newValue >= 1) {
			newQuantities[goods.id] = newValue
		} else {
			newQuantities[goods.id] = 1
		}

		setQuantities(newQuantities)
	}

	const handleAddPress = (goods: GoodsItem) => {
		dispatch(
			addToBasket({
				product: goods,
				quantity: Number(quantities[goods.id])
			})
		)
	}

	return (
		<MainContainer blured={blured.blured}>
			<ProductList>
				{list.map(goods => (
					<Product key={goods.id}>
						<ImagesSpace>
							<Image src={goods.image} />
						</ImagesSpace>

						<BotSpace>
							<ProductText>
								<ProductName>{goods.name}</ProductName>

								<ProductPrice>{goods.price} UAH</ProductPrice>
							</ProductText>

							<AddTo>
								<Button onClick={() => handleAddPress(goods)}>
									<ButtonText>Add to Basket</ButtonText>
								</Button>

								<InputAmount
									min="1"
									type="number"
									value={quantities[goods.id] ?? 1}
									onChange={e => handleQuantityChange(e, goods)}
								/>
							</AddTo>
						</BotSpace>
					</Product>
				))}
			</ProductList>
		</MainContainer>
	)
}

export default GoodsList
