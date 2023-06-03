import React from 'react'
import Basket from '../Basket'

import { HeaderMain, HeaderLogo, HeaderTitle, HeaderTitleStore } from './styled'

const Header: React.FC = () => {
	return (
		<HeaderMain>
			<HeaderLogo>
				<HeaderTitle>Kit.</HeaderTitle>
				<HeaderTitleStore>Store</HeaderTitleStore>
			</HeaderLogo>

			<Basket />
		</HeaderMain>
	)
}

export default Header
