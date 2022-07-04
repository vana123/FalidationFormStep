import React from "react";
import MainContainer from "../MainContainer";
import {
	Checkbox,
	FormControlLabel,
	TextField,
	textFieldClasses,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TStep2 } from "../../../type/FormValidation";
import PrimaryButton from "../inputs/PrimaryButton";
import Form from "../Form";
import { useNavigate } from "react-router-dom";
import { normalize } from "path";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useAppDispatch, useAppSelector } from "../../../hook/redux";
import { setStap2 } from "../../../store/reducers/form";

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Email should have corect format")
		.required("EmailFirst name is required field"),
});

function Step2() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { email, hasPhone, phone } = useAppSelector(
		(state) => state.formReducer
	);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<TStep2>({
		mode: "onBlur",
		resolver: yupResolver(schema),
		defaultValues: {
			email: email,
			hasPhone: hasPhone,
			phone: phone,
		},
	});

	const onSubmit = (data: TStep2) => {
		console.log(data);
		dispatch(setStap2(data));
		navigate("/step3");
	};

	const hasPhoneCheckBox = watch("hasPhone");

	const normalizePhoneNumber = (value: string): string => {
		const phoneNumber = parsePhoneNumberFromString(value);
		if (!phoneNumber) {
			return value;
		}

		return phoneNumber.formatInternational();
	};

	return (
		<div className="Setp2">
			<MainContainer>
				Stap2
				<Form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						{...register("email")}
						fullWidth
						margin="normal"
						id="email"
						type="email"
						label="Email"
						error={!!errors.email}
						helperText={errors?.email?.message}
						name="email"
					/>

					<FormControlLabel
						control={
							<Checkbox
								defaultChecked={hasPhone}
								{...register("hasPhone")}
							/>
						}
						label="Do you have a phone"
					/>

					{hasPhoneCheckBox && (
						<TextField
							{...register("phone")}
							label="Phone number"
							type={"tel"}
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							) => {
								event.target.value = normalizePhoneNumber(
									event.target.value
								);
							}}
						/>
					)}
					<PrimaryButton>Next</PrimaryButton>
				</Form>
			</MainContainer>
		</div>
	);
}

export default Step2;
