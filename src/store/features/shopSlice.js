import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	shops: [],
	isShops: false,
};

const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		addShop: (state, action) => {
			state.isShops = true;
			state.shops = [...state.shops, action.payload.shops];
		},
		removeShop: (state, action) => {
			state.shops = state.shops.filter(
				(item) => item._id !== action.payload.shop._id
			);
			if (state.shops.length === 0) state.isShops = false;
		},
	},
});

export const { addShop, removeShop } = shopSlice.actions;

export default shopSlice.reducer;
