import type { AuthToken } from "../utils/interfaces/AuthToken";

export const useAuth = () => {
	const appUser = userData();
	const authData = useState<AuthToken | null>("user", () => null);
	const authenticated = useState<boolean>("isAuthenticated", () => false);
	const userAuth = useCookie<AuthToken>("auth", {
		maxAge: 60 * 60 * 24,
	});

	const login = (auth: AuthToken) => {
		//store cookie
		userAuth.value = auth;

		//set essential values
		appUser.data.value = auth.user;

		authData.value = auth;
		authenticated.value = true;

		// redirect to appropriate account
		if (auth.user.role === "admin") {
			navigateTo("/admin");
		} else navigateTo("/app");
	};

	const logout = () => {
		authData.value = null;
		authenticated.value = false;
		// storage().remove();
		useCookie("auth").value = null;
		navigateTo("/sign-in");
	};

	const isAuthenticated = () => {
		if (authenticated.value) {
			return true;
		}

		const auth = useCookie<AuthToken | null>("auth");
		// console.log(auth);
		if (auth.value == null || auth.value == undefined) {
			// console.log("Empty")
			return false;
		}

		authenticated.value = true;
		authData.value = auth.value;

		appUser.data.value = auth.value.user;

		return true;
	};

	return {
		isAuthenticated,
		userData: authData,
		logout,
		login,
	};
};
