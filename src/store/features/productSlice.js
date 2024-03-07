import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	isProducts: false,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.isProducts = true;
			state.products = action.payload.products;
		},
		removeProduct: (state, action) => {
			state.products = state.products.filter(
				(item) => item._id !== action.payload.product._id
			);
			if (state.products.length === 0) state.isProducts = false;
		},
	},
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
