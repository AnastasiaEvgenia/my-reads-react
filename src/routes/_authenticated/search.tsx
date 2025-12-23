import { Link, createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth.ts";

export const Route = createFileRoute("/_authenticated/search")({
	component: RouteComponent,
});

function RouteComponent() {
	const { user } = useAuth();

	return (
		<div>
			<h1>Search Page</h1>
			<p>
				Welcome {user}, this is the authenticated search page at
				"/search"
			</p>
			<nav>
				<Link to="/">Go to Home</Link>
			</nav>
		</div>
	);
}
