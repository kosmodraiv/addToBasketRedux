import styled from 'styled-components'

export const ProductText = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ProductList = styled.div`
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-top: 30px;
`
export const Product = styled.div`
	width: 300px;
	height: 350px;
	border-radius: 10px;
	margin: 1% 2% 1% 2%;
	box-shadow: 0 3px 6px 0 white;
	background-color: white;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
		box-shadow: 0 0px 3px 0 black;
		transition: all 0.2s ease-in-out;
	}
`

export const ImagesSpace = styled.div`
	height: 60%;
	width: 100%;
`

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 10px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
`

export const BotSpace = styled.div`
	height: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

export const ProductName = styled.h1`
	color: black;
	font-size: 21px;
`

export const ProductPrice = styled.h3`
	margin-top: 10px;
	font-size: 18px;
	background-color: black;
	padding: 5px;
	color: white;
`

export const AddTo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const Button = styled.button`
	width: 150px;
	height: 27px;
	background-color: black;
	border: none;
	border-radius: 5px;
	transition: all 0.2s ease-in-out;
	color: white;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;

	&:hover {
		background-color: white;
		transition: all 0.2s ease-in-out;
		border: 1px solid black;
		color: black;
	}
`

export const ButtonText = styled.h2`
	font-size: 12px;
	cursor: pointer;
`

export const InputAmount = styled.input`
	width: 150px;
	height: 25px;
	border-radius: 5px;
	border: none;
	text-align: center;
	border: 1px solid black;
	border-left: none;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
`

export const MainContainer = styled.div<{ blured: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	filter: blur(${props => (props.blured ? '5px' : '0px')});
	pointer-events: ${props => (props.blured ? 'none' : 'auto')};
`
