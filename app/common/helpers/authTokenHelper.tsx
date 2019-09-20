const AUTH_TOKEN_STORAGE_KEY = "fpa.user_authtoken";

export const getAuthToken = () => {
	const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
	return token || "";
};

export const storeAuthToken = (token: string) => {
	localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
};

export const clearAuthToken = () => {
	localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
};
