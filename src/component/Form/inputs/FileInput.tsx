import * as React from "react";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Paper,
	Theme,
} from "@mui/material";
import { Controller } from "react-hook-form";
import Dropzone, {
	DropzoneRootProps,
	DropzoneInputProps,
} from "react-dropzone";
import { CloudUpload, InsertDriveFile } from "@mui/icons-material";

export const FileInput = ({ control, name }: any) => {
	return (
		<>
			<Controller
				control={control}
				name={name}
				defaultValue={[]}
				render={({ field: { onChange, onBlur, value } }) => (
					<>
						<Dropzone onDrop={onChange}>
							{({
								getRootProps,
								getInputProps,
							}: DropzoneRootProps & DropzoneInputProps) => (
								<Paper
									{...getRootProps()}
									variant="outlined"
									style={{ textAlign: "center" }}
								>
									<CloudUpload />
									<input
										name={name}
										onBlur={onBlur}
										{...getInputProps()}
									/>
									<p>
										Drag 'n; drops files hear, or click to
										select files
									</p>
								</Paper>
							)}
						</Dropzone>
						<List>
							{value.map((f: File, index: number) => (
								<ListItem>
									<ListItemIcon key={index}>
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
			/>
		</>
	);
};
