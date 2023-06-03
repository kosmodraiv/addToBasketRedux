import React, { useState } from 'react'
import 'animate.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleBlurred } from '../../store/blure/blurSlice'

import {
	removeFromBasket,
	updateQuantity
} from '../../store/basket/basketSlice'
import { selectBasketItems } from '../../store/basket/selectors'
import {
	BasketProductImg,
	BasketCentered,
	BasketImg,
	AmountBasket,
	Amount,
	ListBasket,
	CloseBasket,
	ItemBasketName,
	BasketItems,
	AmountText,
	AmountSpace,
	AmountInput,
	RemoveSpace,
	BuyProduct,
	RemoveProduct
} from './styled'
import { BasketItem } from '../../store/basket/types'

const Basket: React.FC = () => {
	const dispatch = useDispatch()
	const [visible, setVisible] = useState<boolean>(false)
	const basketItems = useSelector(selectBasketItems)
	const basketAmount = basketItems.length

	const toggleBlurredBackground = () => {
		dispatch(toggleBlurred())
	}

	const handleClick = () => {
		setVisible(prev => !prev)
	}

	const handleBasketClick = () => {
		handleClick()
		toggleBlurredBackground()
	}

	function handleAmountChange(
		e: React.ChangeEvent<HTMLInputElement>,
		item: BasketItem
	) {
		const newQuantity = +e.target.value || 0

		dispatch(updateQuantity({ itemId: item.product.id, quantity: newQuantity }))
	}

	const handleRemoveFromBasket = (item: BasketItem) => {
		dispatch(
			removeFromBasket({
				itemId: item.product.id
			})
		)
	}

	const BasketImage =
		'https://res.cloudinary.com/dultruinc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/Shop/rulkwtfu8ayzvlk0jmfp'
	const BasketCloseImage =
		'https://res.cloudinary.com/dultruinc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/Shop/dwpjfjzia6frq5oethlf'
	return (
		<>
			<BasketImg onClick={handleBasketClick} src={BasketImage} />

			<AmountBasket>
				<Amount>{basketAmount}</Amount>
			</AmountBasket>

			<BasketCentered
				visible={visible}
				className={`${
					visible
						? 'animate__animated animate__fadeIn'
						: 'animate__animated animate__fadeOut'
				}`}
			>
				<CloseBasket onClick={handleBasketClick} src={BasketCloseImage} />

				<ListBasket>
					{basketItems.map(item => (
						<BasketItems key={item.product.id}>
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

								<RemoveProduct onClick={() => handleRemoveFromBasket(item)}>
									Remove
								</RemoveProduct>
							</RemoveSpace>
						</BasketItems>
					))}
				</ListBasket>
			</BasketCentered>
		</>
	)
}

export default Basket
