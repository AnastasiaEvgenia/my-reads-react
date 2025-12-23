import { Link, createFileRoute, useRouter } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth.ts";

export const Route = createFileRoute("/_authenticated/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { user, logout } = useAuth();
	const router = useRouter();
	const navigate = Route.useNavigate();

	const handleLogout = () => {
		logout().then(() => {
			router.invalidate().finally(() => {
				navigate({ to: "/" });
			});
		});
	};

	return (
		<div>
			<h1>Welcome, {user}!</h1>
			<p>This is the authenticated home page at "/"</p>
			<nav>
				<Link to="/search">Go to Search</Link>
			</nav>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
