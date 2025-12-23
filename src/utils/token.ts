const TOKEN_KEY = "myreads_token";

export const getStoredToken = (): string | null => {
	try {
		return localStorage.getItem(TOKEN_KEY);
	} catch {
		return null;
	}
};

export const setStoredToken = (token: string | null): void => {
	try {
		if (token === null) {
			localStorage.removeItem(TOKEN_KEY);
		} else {
			localStorage.setItem(TOKEN_KEY, token);
		}
	} catch {
		// ignore
	}
};

export const ensureToken = (): string => {
	let token = getStoredToken();
	if (!token) {
		token = Math.random().toString(36).slice(-8);
		setStoredToken(token);
	}
	return token;
};
