import AxiosInstance from "./base";
import { CancelToken } from "axios";

export default class AuthAPI {
	public static async getAuthByToken(): Promise<{ result: Model.IRawUser }> {
		return (await AxiosInstance().get("/auth")).data;
	}

	public static async signIn(params: {
		email: string;
		password: string;
		cancelToken: CancelToken;
	}): Promise<{
		token: string;
		data: Model.IRawUser;
	}> {
		const { email, password, cancelToken } = params;
		return (await AxiosInstance().post("/users/signin", { id: email, password }, { cancelToken })).data;
	}
}
