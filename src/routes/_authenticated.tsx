import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import type { AuthContext } from "@/providers/auth-provider.tsx";
import AppLayout from "@/components/AppLayout.tsx";

export const Route = createFileRoute("/_authenticated")({
	beforeLoad: (ctx) => {
		const context = ctx.context as AuthContext;
		if (!context.isAuthenticated) {
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
