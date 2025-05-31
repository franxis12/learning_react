import { createSlice } from '@reduxjs/toolkit';

const storedCart = localStorage.getItem('cart');
const initialState = {
  cartItems: storedCart ? JSON.parse(storedCart) : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action) => {
  const product = action.payload;
  const existing = state.cartItems.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cartItems.push({ ...product, quantity: 1 });
  }
},
removeFromCart: (state, action) => {
  const id = action.payload;
  state.cartItems = state.cartItems.filter(item => item.id !== id);
},
increaseQuantity: (state, action) => {
  const item = state.cartItems.find(i => i.id === action.payload);
  if (item) item.quantity += 1;
},
decreaseQuantity: (state, action) => {
  const item = state.cartItems.find(i => i.id === action.payload);
  if (item && item.quantity > 1) item.quantity -= 1;
},
  },
});



export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;