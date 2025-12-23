import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import type { AuthContext } from "@/providers/auth-provider.tsx";
import { useAuth } from "@/hooks/useAuth.ts";

export const Route = createFileRoute("/login")({
	beforeLoad: (ctx) => {
		const context = ctx.context as AuthContext;
		if (context.isAuthenticated) {
			throw redirect({ to: "/" });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { login } = useAuth();
	const navigate = Route.useNavigate();
	const router = useRouter();

	const handleLogin = () => {
		login("demo-user").then(() => {
			router.invalidate().finally(() => {
				navigate({ to: "/" });
			});
		});
	};

	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
}
