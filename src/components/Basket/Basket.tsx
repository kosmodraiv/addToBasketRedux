import React, { useState } from 'react'
import 'animate.css'
import { useSelector, useDispatch } from 'react-redux'
import {
	removeFromBasket,
	updateQuantity
} from '../../store/basket/basket.action'

import {
	BasketProductImg,
	StyledBasket,
	BasketImg,
	AmountBasket,
	Amount,
	ListBasket,
	CloseBasket,
	ItemBasketName,
	BasketItem,
	AmountText,
	AmountSpace,
	AmountInput,
	RemoveSpace,
	BuyProduct,
	RemoveProduct
} from './styled'

interface BasketProps {
	toggleBlurredBackground: () => void
}

interface BasketItem {
	id: number
	product: {
		id: number
		name: string
		price: number
		image: string
	}
	quantity: number
}

const Basket: React.FC<BasketProps> = ({ toggleBlurredBackground }) => {
	const dispatch = useDispatch()
	const [visible, setVisible] = useState<boolean>(false)

	const handleClick = () => {
		setVisible(prev => !prev)
	}

	const basketItems = useSelector(
		(state: { basket: { items: BasketItem[] } }) => state.basket.items
	)

	const basketAmount = basketItems.length

	function handleAmountChange(e, item) {
		const newQuantity = +e.target.value || 0

		dispatch(updateQuantity({ itemId: item.product.id, quantity: newQuantity }))
	}

	const BasketImage =
		'https://res.cloudinary.com/dultruinc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/Shop/rulkwtfu8ayzvlk0jmfp'
	const BasketCloseImage =
		'https://res.cloudinary.com/dultruinc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/Shop/dwpjfjzia6frq5oethlf'
	return (
		<>
			<BasketImg
				onClick={() => {
					handleClick()
					toggleBlurredBackground()
					console.log('true')
				}}
				src={BasketImage}
			></BasketImg>

			<AmountBasket>
				<Amount>{basketAmount}</Amount>
			</AmountBasket>

			<StyledBasket
				visible={visible}
				className={`${visible ? 'animate__animated animate__fadeIn' : ''}`}
			>
				<CloseBasket
					onClick={() => {
						handleClick()
						toggleBlurredBackground()
					}}
					src={BasketCloseImage}
				/>

				<ListBasket>
					{basketItems.map(item => (
						<BasketItem key={item.id}>
							<BasketProductImg src={item.product.image} />
							<ItemBasketName>Product: {item.product.name}</ItemBasketName>

							<AmountText>Amount:</AmountText>

							<AmountSpace>
								<AmountInput
									type="number"
									value={item.quantity}
									onChange={e => handleAmountChange(e, item)}
								/>
							</AmountSpace>

							<AmountText>
								Price: {item.product.price * item.quantity} UAH
							</AmountText>

							<RemoveSpace>
								<BuyProduct>Buy</BuyProduct>
								<RemoveProduct
									onClick={() =>
										dispatch(
											removeFromBasket({
												itemId: item.product.id
											})
										)
									}
								>
									Remove
								</RemoveProduct>
							</RemoveSpace>
						</BasketItem>
					))}
				</ListBasket>
			</StyledBasket>
		</>
	)
}

export default Basket
