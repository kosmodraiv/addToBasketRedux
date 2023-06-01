import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { basketSlice } from './basket/basket.slice'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, basketSlice.reducer)

const store = configureStore({
	reducer: {
		basket: persistedReducer
	}
})

const persistedStore = persistStore(store)

export { store, persistedStore }
