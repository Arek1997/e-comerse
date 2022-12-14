import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isNavShown: false,
	isCartShown: false,
	isCartOrderShown: false,
	isOverlayShown: false,
	isProfileModalShown: false,
	isProfileDetailsShown: false,
	ifProfileFavProductsShown: false,
};

const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		toggleNav: (state) => {
			state.isNavShown = !state.isNavShown;
		},

		toggleCart: (state) => {
			state.isCartShown = !state.isCartShown;
		},

		toggleCartOrder: (state) => {
			state.isCartOrderShown = !state.isCartOrderShown;
		},

		toggleOverlay: (state) => {
			state.isOverlayShown = !state.isOverlayShown;
		},

		toggleProfileModal: (state) => {
			state.isProfileModalShown = !state.isProfileModalShown;
		},

		toggleProfileDetails: (state) => {
			state.isProfileDetailsShown = !state.isProfileDetailsShown;
		},

		toggleProfileFavProducts: (state) => {
			state.ifProfileFavProductsShown = !state.ifProfileFavProductsShown;
		},
	},
});

export const navigationActions = navigationSlice.actions;
export default navigationSlice;
