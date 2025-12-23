import { createContext, useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { mockApiFetch } from "@/utils.ts";
// import { ensureToken, setStoredToken } from "@/utils/token";

const localStorageKey = "myreads.auth.user";

export interface AuthContext {
	isAuthenticated: boolean;
	login: (username: string) => Promise<void>;
	logout: () => Promise<void>;
	user: string | null;
}

export const AuthContext = createContext<AuthContext | null>(null);

function getStoredUser() {
	try {
		return localStorage.getItem(localStorageKey);
	} catch {
		return null;
	}
}

function setStoredUser(user: string | null) {
	if (user) {
		localStorage.setItem(localStorageKey, user);
	} else {
		localStorage.removeItem(localStorageKey);
	}
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<string | null>(getStoredUser()); // Initialize from localStorage

	// console.log("🔄 AuthProvider render", {
	// 	user,
	// 	isAuthenticated: Boolean(user),
	// });

	// useEffect(() => {
	// 	// ensure token exists for API usage
	// 	ensureToken();
	// }, []);

	const logout = useCallback(async () => {
		await mockApiFetch(250);
		setStoredUser(null);
		setUser(null);
		// // remove token on logout
		// setStoredToken(null);
	}, []);

	const login = useCallback(async (username: string) => {
		await mockApiFetch(500);
		setStoredUser(username);
		setUser(username);
		// // create a token and persist it (demo only)
		// setStoredToken(ensureToken());
	}, []);

	// const value = {
	// 	isAuthenticated: Boolean(user),
	// 	user,
	// 	login,
	// 	logout,
	// };
	const value = useMemo(
		() => ({
			isAuthenticated: Boolean(user),
			user,
			login,
			logout,
		}),
		[user, login, logout],
	);

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
}
