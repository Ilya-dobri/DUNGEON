import cartSlice from './slice/PanelSlise'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    cart: cartSlice
    
  },
})
