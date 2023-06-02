import React, { useState } from 'react'

import GoodsList from '../GoodsList'
import Basket from '../Basket'
import Header from '../Header'

const AppContainer: React.FC = () => {
	const [blured, setBlured] = useState<boolean>(false)

	const toggleBlurredBackground = () => {
		setBlured(prev => !prev)
	}

	return (
		<>
			<Header />

			<GoodsList blured={blured} />

			<Basket toggleBlurredBackground={toggleBlurredBackground} />
		</>
	)
}

export default AppContainer
