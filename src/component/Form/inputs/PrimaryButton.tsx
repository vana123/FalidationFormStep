import React from "react";
import { Button } from "@mui/material";

const PrimaryButton = ({ children, ...prop }: any) => {
	return (
		<Button type="submit" fullWidth {...prop} variant="contained">
			{children}
		</Button>
	);
};

export default PrimaryButton;
