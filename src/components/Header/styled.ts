import styled from 'styled-components'

export const HeaderMain = styled.div`
	height: 7vh;
	font-size: 26px;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: -2;
`

export const HeaderLogo = styled.div`
	font-weight: bold;
	text-transform: uppercase;
	color: #fff;
	position: relative;
	user-select: none;

	&:before {
		content: '';
		position: absolute;
		top: -5px;
		left: 0;
		right: 0;
		height: 2px;
		background-color: #fff;
	}

	&:after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		right: 0;
		height: 2px;
		background-color: #fff;
	}

	span {
		color: black;
		background-color: #fff;
		padding: 5px;
	}
`
