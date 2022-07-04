import React, { useEffect, useState } from "react";
import MainContainer from "../MainContainer";
import { useAppSelector } from "../../../hook/redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { InsertDriveFile } from "@mui/icons-material";
import Confetti from "react-confetti";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import PrimaryButton from "../inputs/PrimaryButton";
import { Data } from "../../../data/data";

function Result() {
	const { firstName, lastName, email, hasPhone, phone } = useAppSelector(
		(store) => store.formReducer
	);
	const files = Data.formFiles.files;
	const [success, setSuccess] = useState(false);
	const onSubmit = async () => {
		const formData = new FormData();
		if (files) {
			files.forEach((file) => {
				formData.append("file", file, file.name);
			});
		}
		formData.append("firstName", firstName);
		formData.append("lastName", lastName);
		formData.append("email", email);
		formData.append("hasPhone", hasPhone.toString());
		formData.append("phone", phone);

		// const res = await fetch('http://localhost:4000/',{
		// 	method: POST,
		// 	body: formData
		// })

		Swal.fire({
			icon: "success",
			title: "Your work has been saved",
			showConfirmButton: false,
			timer: 1500,
		});
		setSuccess(true);
	};

	if (success) {
		return <Confetti />;
	}

	return (
		<div className="Result">
			<MainContainer>
				<Typography component="h2" variant="h5">
					📋 Form Values
				</Typography>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Field</TableCell>
								<TableCell align="right">Value</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell component="th" scope="row">
									First Name
								</TableCell>
								<TableCell align="right">{firstName}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell component="th" scope="row">
									Last Name
								</TableCell>
								<TableCell align="right">{lastName}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell component="th" scope="row">
									Email
								</TableCell>
								<TableCell align="right">{email}</TableCell>
							</TableRow>
							{hasPhone && (
								<TableRow>
									<TableCell component="th" scope="row">
										Phone
									</TableCell>
									<TableCell align="right">{phone}</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>

				{!!files.length && (
					<>
						<Typography component="h2" variant="h5">
							📦 {files.length} Files
						</Typography>
						<List>
							{files.map((f, index) => (
								<ListItem key={index}>
									<ListItemIcon>
										<InsertDriveFile />
									</ListItemIcon>
									<ListItemText
										primary={f.name}
										secondary={f.size}
									/>
								</ListItem>
							))}
						</List>
					</>
				)}
				<PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
				<Link to="/">Start over</Link>
			</MainContainer>
		</div>
	);
}

export default Result;
