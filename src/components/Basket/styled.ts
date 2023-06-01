import styled from 'styled-components'

export const BasketProductImg = styled.img`
	width: 100%;
	height: 70px;
	object-fit: cover;
	border: 1px solid black;
	border-radius: 10px;
`

export const StyledBasket = styled.div<{ visible: boolean }>`
	z-index: 99;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 60%;
	height: 50%;
	background-color: black;
	border-radius: 10px;
	visibility: ${props => (props.visible ? 'visible' : 'hidden')};
	box-shadow: 0 3px 15px white;

	@media (max-width: 950px) {
		width: 90%;
	}
`

export const BasketImg = styled.img`
	top: 0;
	right: 0;
	width: 60px;
	padding: 0 18px 0 0;
	position: absolute;
	cursor: pointer;
	border-radius: 10px;
`

export const AmountBasket = styled.div`
	position: absolute;
	right: 44px;
	top: 29px;
	z-index: -1;
`

export const Amount = styled.p`
	color: white;
`

export const ListBasket = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	overflow-x: auto;
	margin-top: 2%;
	height: 90%;
	max-width: 90%;
	min-width: 90%;

	::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-thumb {
		background-color: black;
		border-radius: 20px;
		border: none;
	}

	::-webkit-scrollbar-track {
		background: white;
	}
`

export const CloseBasket = styled.img`
	width: 40px;
	position: absolute;
	right: 0;
	cursor: pointer;
	opacity: 0.6;

	&:hover {
		opacity: 1;
	}
`

export const ItemBasketName = styled.p`
	padding-top: 5%;
	text-align: center;
	font-size: 21px;
	min-width: 20vw;

	@media (max-width: 780px) {
		min-width: 40vw;
	}
`

export const BasketItem = styled.div`
	padding: 1%;
	background-color: white;
	border: 1px solid black;
	border-radius: 10px;
	box-shadow: 0 3px 15px black;
	color: black;
	font-weight: bold;
	height: 90%;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
	}

	&:nth-child(n + 2) {
		margin-left: 5%;
	}
`

export const AmountText = styled.p`
	text-align: center;
	font-size: 21px;
	margin-bottom: 5%;
	margin-top: 2%;
`

export const AmountSpace = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const AmountInput = styled.input`
	width: 5vw;
	height: 3.5vh;
	border-radius: 5px;
	font-size: 18px;
	text-align: center;
	margin-bottom: 5%;
	font-weight: 600;
`

export const RemoveSpace = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const BuyProduct = styled.button`
	background-color: black;
	color: white;
	border: none;
	width: 7vw;
	height: 3vh;
	border-radius: 5px;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	@media (max-width: 930px) {
		width: 20vw;
	}

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.1);
	}
`

export const RemoveProduct = styled.button`
	background-color: white;
	border: 1px solid black;
	width: 7vw;
	height: 3vh;
	border-radius: 5px;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	@media (max-width: 930px) {
		width: 20vw;
	}

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.1);
	}

	&:nth-child(n + 2) {
		margin-top: 5%;
	}
`
