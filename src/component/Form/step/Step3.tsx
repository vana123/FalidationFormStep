import React from "react";
import { useNavigate } from "react-router-dom";

import MainContainer from "../MainContainer";
import { FileInput } from "../inputs/FileInput";
import { useForm } from "react-hook-form";
import Form from "../Form";
import PrimaryButton from "../inputs/PrimaryButton";
import { Data } from "../../../data/data";

function Stap3() {
	const navigate = useNavigate();
	const { handleSubmit, control } = useForm<{ files: File[] }>({
		mode: "onBlur",
		defaultValues: {
			files: Data.formFiles.files,
		},
	});

	const onSubmit = (data: { files: File[] }) => {
		Data.formFiles.files = data.files;
		navigate("/result");
	};

	return (
		<div className="Satp3">
			<MainContainer>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FileInput control={control} name="files" />
					<PrimaryButton>Result</PrimaryButton>
				</Form>
			</MainContainer>
		</div>
	);
}

export default Stap3;
