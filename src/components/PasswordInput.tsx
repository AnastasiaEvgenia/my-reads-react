import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import TextField from "@mui/material/TextField";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";

type PasswordInputProps<T extends FieldValues> = ControllerRenderProps<T> & {
	label?: string;
	error?: boolean;
	helperText?: string;
};

export default function PasswordInput<T extends FieldValues>(
	props: PasswordInputProps<T>,
) {
	const { label = "Password", error, helperText, ...field } = props;
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault();
	};

	const handleMouseUpPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault();
	};

	return (
		<TextField
			{...field}
			label={label}
			fullWidth
			error={error}
			helperText={helperText}
			slotProps={{
				input: {
					"aria-label": "password",
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								aria-label={
									showPassword
										? "hide the password"
										: "display the password"
								}
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								onMouseUp={handleMouseUpPassword}
								edge="end"
							>
								{showPassword ? (
									<VisibilityOff />
								) : (
									<Visibility />
								)}
							</IconButton>
						</InputAdornment>
					),
				},
			}}
			type={showPassword ? "text" : "password"}
		/>
	);
}
