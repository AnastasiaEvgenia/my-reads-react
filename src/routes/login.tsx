import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { AuthContext } from "@/providers/auth-provider.tsx";
import type { SubmitHandler } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth.ts";
import LoginForm from "@/components/LoginForm.tsx";

export const Route = createFileRoute("/login")({
	beforeLoad: (ctx) => {
		const context = ctx.context as AuthContext;
		if (context.isAuthenticated) {
			throw redirect({ to: "/" });
		}
	},
	component: RouteComponent,
});

const FormSchema = z.object({
	username: z
		.string()
		.regex(
			/^[a-zA-Z0-9_]+$/,
			"The username must contain only letters, numbers and underscore (_)",
		),
	password: z.string().min(1, "Password is required"),
});

export type LoginFormData = z.infer<typeof FormSchema>;

function RouteComponent() {
	const { login } = useAuth();
	const navigate = Route.useNavigate();
	const router = useRouter();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "johndoe",
			password: "12345",
		},
	});

	const onSubmit: SubmitHandler<LoginFormData> = (data) => {
		login(data.username, data.password).then(() => {
			router.invalidate().finally(() => {
				navigate({ to: "/" });
			});
		});
	};

	return (
		<Container
			maxWidth={false}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)",
			}}
		>
			<LoginForm
				onSubmit={handleSubmit(onSubmit)}
				control={control}
				errors={errors}
			/>
		</Container>
	);
}
