import { configureStore, createSlice } from '@reduxjs/toolkit';

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

      localStorage.setItem('basketItems', JSON.stringify(state.items));
    },

    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const updatedItems = state.items.filter((item) => {
        if (item.product.id === itemId) {
          if (quantity > 0) {
            item.quantity = quantity;
            return true;
          }
          return false; // Удалить если осталось 0 элементов
        }
        return true;
      });

      state.items = updatedItems;

      localStorage.setItem('basketItems', JSON.stringify(state.items));
    },

    removeFromBasket: (state, action) => {
      const { itemId } = action.payload;
      state.items = state.items.filter((item) => item.product.id !== itemId);

      localStorage.setItem('basketItems', JSON.stringify(state.items));
    },
  },
});

export const removeFromBasket = (itemId: number) => ({
  type: 'basket/removeFromBasket',
  payload: { itemId },
});

export const updateQuantity = ({ itemId, quantity }: { itemId: number; quantity: number }) => ({
  type: 'basket/updateQuantity',
  payload: { itemId, quantity },
});

export const { addToBasket } = basketSlice.actions;

const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
  },
});

// Получение данных из localStorage
const storedItems = localStorage.getItem('basketItems');
const initialItems = storedItems ? JSON.parse(storedItems) : [];

// Обновление состояние корзины, используя полученные данные
store.dispatch({ type: 'basket/initialize', payload: { items: initialItems } });

export default store;
