import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { routeTree } from "./routeTree.gen";

import reportWebVitals from "./reportWebVitals.ts";
import { AuthProvider } from "@/providers/auth-provider.tsx";
import { useAuth } from "@/hooks/useAuth.ts";
import AppThemeProvider from "@/providers/theme-provider.tsx";

const queryClient = new QueryClient();

const router = createRouter({
	routeTree,
	context: {
		auth: undefined!,
		queryClient,
	},
	defaultPreload: "intent",
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function InnerApp() {
	const auth = useAuth();
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} context={{ auth, queryClient }} />
		</QueryClientProvider>
	);
}

function App() {
	return (
		<AuthProvider>
			<InnerApp />
		</AuthProvider>
	);
}

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<AppThemeProvider>
				<SnackbarProvider>
					<App />
				</SnackbarProvider>
			</AppThemeProvider>
		</StrictMode>,
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
