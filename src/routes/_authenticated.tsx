import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import AppLayout from "@/components/AppLayout.tsx";

export const Route = createFileRoute("/_authenticated")({
	beforeLoad: (ctx) => {
		if (!ctx.context.auth.isAuthenticated) {
			throw redirect({
				to: "/login",
			});
		}
	},
	component: () => (
		<AppLayout>
			<Outlet />
		</AppLayout>
	),
});
