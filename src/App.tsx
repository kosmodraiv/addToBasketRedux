import React from 'react'

import AppContainer from './components/AppContainer/AppContainer'

import { store, persistedStore } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { GlobalStyles } from './styles/global'

const App: React.FC = () => {
	return (
		<>
			<GlobalStyles />
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistedStore}>
					<AppContainer />
				</PersistGate>
			</Provider>
		</>
	)
}

export default App
