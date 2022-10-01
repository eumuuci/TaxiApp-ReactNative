import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	destintion: null,
	origin: null,
	travelTimeInformartion: null
}

export const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setOrigin: (state, action) => {
			state.origin = action.payload;
		},
		setDestination: (state,action) => {
			state.destintion = action.payload;
		},
		setTravelTimeInformation: (state, action) => {
			state.travelTimeInformartion = action.payload;
		},
	},
});

export const { setDestination, setOrigin, setTravelTimeInformation } = navSlice.actions;
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destintion;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformartion;
export default navSlice.reducer;
