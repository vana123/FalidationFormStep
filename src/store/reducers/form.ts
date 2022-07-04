import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TStep1, TStep2 } from "../../type/FormValidation";

type Tform = {
	firstName: string;
	lastName: string;
	email: string;
	hasPhone: boolean;
	phone: string;
};

const initialState: Tform = {
	firstName: "",
	lastName: "",
	email: "",
	hasPhone: false,
	phone: "",
};

export const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setStap1(state, action: PayloadAction<TStep1>) {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
		},
		setStap2(state, action: PayloadAction<TStep2>) {
			state.email = action.payload.email;
			state.hasPhone = action.payload.hasPhone;
			if (!action.payload.hasPhone || !action.payload.phone) {
				state.phone = "";
			} else {
				state.phone = action.payload.phone;
			}
		},
	},
});

export const { setStap1, setStap2 } = formSlice.actions;
export const formReducer = formSlice.reducer;
