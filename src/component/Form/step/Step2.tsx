import React from "react";
import MainContainer from "../MainContainer";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TStep2 } from "../../../type/FormValidation";
import PrimaryButton from "../inputs/PrimaryButton";
import Form from "../Form";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Email should have corect format")
		.required("EmailFirst name is required field"),
});

function Step2() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TStep2>({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: TStep2) => {
		console.log(data);
		navigate("/step3");
	};

	return (
		<div className="Setp2">
			<MainContainer>
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
					<PrimaryButton>Next</PrimaryButton>
				</Form>
			</MainContainer>
		</div>
	);
}

export default Step2;
