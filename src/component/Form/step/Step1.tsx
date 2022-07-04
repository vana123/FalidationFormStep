import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import Form from "../Form";
import MainContainer from "../MainContainer";
import PrimaryButton from "../inputs/PrimaryButton";
import { TStep1 } from "../../../type/FormValidation";

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, "First name shoulds not containt numbers")
		.required("First name is required field"),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, "Last name shoulds not containt numbers")
		.required("Last name is required field"),
});

function Satp1() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TStep1>({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<TStep1> = (data) => {
		console.log(data);
		navigate("/step2");
	};
	return (
		<div className="Satp1">
			<MainContainer>
				Stap1
				<Form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						{...register("firstName")}
						fullWidth
						margin="normal"
						id="firstName"
						type="text"
						label="First Name"
						error={!!errors.firstName}
						helperText={errors?.firstName?.message}
						name="firstName"
					/>
					<TextField
						{...register("lastName")}
						fullWidth
						margin="normal"
						id="lastName"
						type="text"
						label="Last Name"
						error={!!errors.lastName}
						helperText={errors?.lastName?.message}
						name="lastName"
					/>
					<PrimaryButton>Next</PrimaryButton>
				</Form>
			</MainContainer>
		</div>
	);
}

export default Satp1;
