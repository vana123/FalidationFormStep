import React from "react";

function Form({ children, ...prop }: any) {
	return (
		<form action="" {...prop} noValidate>
			{children}
		</form>
	);
}

export default Form;
