import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/features/user/userSlice";
import cartSlice from "@/features/cart/cartSlice";
import productSlice from "@/features/product/productSlice";
import orderSlice from "@/features/order/orderSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    product: productSlice,
    order: orderSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
