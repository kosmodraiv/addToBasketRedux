import { configureStore, createSlice, createAction  } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

interface Product {
  id: number;
}

interface BasketItem {
  product: Product;
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
}

const basketSlice = createSlice({
  name: 'basket',
  initialState: { items: [] } as BasketState,
  reducers: {
    initialize: (state, action) => {
      state.items = action.payload.items;
    },

    addToBasket: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.items.find((item) => item.product.id === product.id);

      // Проверка is NaN
      const validQuantity = isNaN(quantity) ? 1 : quantity;

      if (existingProduct) {
        // Если товар уже существует в корзине, обновляет его количество и цену
        existingProduct.quantity += validQuantity;
      } else {
        // Если товар не существует в корзине, добавляет его как новый товар
        state.items.push({ product, quantity: validQuantity });
      }

    },

    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const updatedItems = state.items.filter((item) => {

          if (item.product.id !== itemId){
          
            return true
          }
    
          if (quantity > 0) {
            item.quantity = quantity;
            
            return true;
          }

          return false; // Удалить если осталось 0 элементов
        
      });

      state.items = updatedItems;
    },

    removeFromBasket: (state, action) => {
      const { itemId } = action.payload;
      state.items = state.items.filter((item) => item.product.id !== itemId);
    },
  },
});


export const { addToBasket } = basketSlice.actions;

export const updateQuantity = createAction<{ itemId: number; quantity: number }>('basket/updateQuantity');

export const removeFromBasket = createAction<{ itemId: number }>('basket/removeFromBasket');


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketSlice.reducer);

const store = configureStore({
  reducer: {
    basket: persistedReducer,
  },
});

const persistedStore = persistStore(store);


export { store, persistedStore };
