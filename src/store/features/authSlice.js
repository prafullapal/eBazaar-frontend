import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: false,
	userData: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.status = true;
			state.userData = action.payload.userData;
		},
		logout: (state) => {
			state.status = false;
			state.userData = null;
		},
		toggleSeller: (state) => {
			state.userData = { ...state.userData, seller: !state.userData.seller };
		},
	},
});

export const { login, logout, toggleSeller } = authSlice.actions;

export default authSlice.reducer;
