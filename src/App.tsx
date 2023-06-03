import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppContainer from './components/AppContainer/AppContainer'
import { store, persistedStore } from './store/store'
import { GlobalStyles } from './globalStyles'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistedStore}>
				<GlobalStyles />

				<AppContainer />
			</PersistGate>
		</Provider>
	)
}

export default App
