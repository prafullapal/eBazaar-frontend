import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import shopSlice from "./features/shopSlice";
import productSlice from "./features/productSlice";

const store = configureStore({
	reducer: {
		auth: authSlice,
		shop: shopSlice,
		product: productSlice,
		// cart: cartSlice
	},
});

export default store;
