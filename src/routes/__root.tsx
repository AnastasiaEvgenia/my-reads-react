import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
			<TanStackDevtools
				config={{
					position: "bottom-right",
				}}
				plugins={[
					{
						name: "Tanstack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
			<ReactQueryDevtools buttonPosition="bottom-left" />
		</Box>
	),
	notFoundComponent: () => <>Not Found</>,
});
