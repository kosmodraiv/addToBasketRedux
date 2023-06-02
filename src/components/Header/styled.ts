import styled from 'styled-components'

export const HeaderMain = styled.div`
	height: 7vh;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	// TODO: Remove once Bucket inside
	position: relative;
	z-index: -2;
`

// TODO: Consider using text tag like p or h1 and so on
// TODO: Move pseudo elements to another component
export const HeaderLogo = styled.div`
	font-weight: bold;
	text-transform: uppercase;
	color: #fff;
	font-size: 26px;
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
`

export const HeaderTitle = styled.span`
	color: black;
	background-color: #fff;
	padding: 5px;
`
