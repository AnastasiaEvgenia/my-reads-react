import { useContext } from "react";
import { AuthContext } from "@/providers/auth-provider.tsx";

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	console.log("🎣 useAuth called", {
		isAuthenticated: context.isAuthenticated,
	});
	return context;
}
