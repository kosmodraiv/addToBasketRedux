import React from 'react'
import GoodsList from '../GoodsList/GoodsList'
import Basket from '../Basket/Basket'
import { useState } from 'react'
import Header from '../Header/Header'

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
