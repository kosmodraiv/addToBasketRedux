import styled from 'styled-components'

export const HeaderMain = styled.div`
	height: 7vh;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 1;
`

export const HeaderLogo = styled.div`
	display: flex;
	flex-direction: row;
	font-weight: bold;
	text-transform: uppercase;
	color: #fff;
	font-size: 26px;
	position: relative;
	user-select: none;
	border-top: 2px solid #fff;
	border-bottom: 2px solid #fff;
`

export const HeaderTitle = styled.p`
	color: black;
	background-color: #fff;
	padding: 5px;
`

export const HeaderTitleStore = styled.p`
	padding: 5px;
`
