import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/features/user/userSlice";
import cartSlice from "@/features/cart/cartSlice";
import productSlice from "@/features/product/productSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
