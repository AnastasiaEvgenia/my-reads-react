import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Box } from "@mui/material";
import type { QueryClient } from "@tanstack/query-core";
import type { AuthContext } from "@/providers/auth-provider.tsx";

export const Route = createRootRouteWithContext<{
	auth: AuthContext;
	queryClient: QueryClient;
}>()({
	component: () => (
		<Box
			sx={{
				minHeight: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Outlet />
		</Box>
	),
	notFoundComponent: () => <>Not Found</>,
});
