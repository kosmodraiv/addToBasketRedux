import React from 'react'

import { HeaderMain, HeaderLogo, HeaderTitle } from './styled'

const Header: React.FC = () => {
	return (
		<HeaderMain>
			<HeaderLogo>
				<HeaderTitle>Kit.</HeaderTitle> Store
			</HeaderLogo>

			{/* TODO: Place Basket here */}
		</HeaderMain>
	)
}

export default Header
