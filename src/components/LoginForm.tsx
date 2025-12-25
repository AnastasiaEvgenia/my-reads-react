import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { Controller, type FieldErrors } from "react-hook-form";
import type { Control } from "react-hook-form";
import type { LoginFormData } from "@/routes/login.tsx";
import PasswordInput from "@/components/PasswordInput.tsx";

type LoginFormProps = {
	onSubmit: () => void;
	control: Control<LoginFormData>;
	errors: FieldErrors<LoginFormData>;
};

export default function LoginForm(props: LoginFormProps) {
	const { onSubmit, control, errors } = props;
	return (
		<Box
			component="form"
			onSubmit={onSubmit}
			noValidate
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				gap: 2,
				maxWidth: 400,
			}}
		>
			<Card
				sx={{
					p: { sm: 1, md: 2 },
					backgroundColor: "rgba(0, 0, 0, 0.6)",
					backdropFilter: "blur(10px)",
					borderRadius: 2,
					boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
					border: "1px solid rgba(255, 255, 255, 0.1)",
				}}
			>
				<CardContent>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>
						<Typography
							variant={"h5"}
							component={"div"}
							sx={{ textAlign: "center" }}
						>
							My Reads
						</Typography>
						<Controller
							name="username"
							control={control}
							render={({ field }) => {
								return (
									<TextField
										{...field}
										error={!!errors.username}
										helperText={errors.username?.message}
										label="Username"
										fullWidth
										aria-describedby="username"
										slotProps={{
											input: {
												"aria-label": "username",
											},
										}}
									/>
								);
							}}
						/>
						<Controller
							name="password"
							control={control}
							render={({ field }) => {
								return (
									<PasswordInput
										{...field}
										error={!!errors.password}
										helperText={errors.password?.message}
									/>
								);
							}}
						/>
					</Box>
				</CardContent>
				<CardActions>
					<Button
						variant={"contained"}
						fullWidth
						disableRipple={true}
						type="submit"
					>
						Sign In
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
}
