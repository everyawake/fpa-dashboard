import AxiosInstance from "./base";
import { CancelToken } from "axios";

export default class AuthAPI {
	public static async signIn(params: { email: string; password: string; cancelToken: CancelToken }) {
		const { email, password, cancelToken } = params;
		return (await AxiosInstance().post("/users/signin", { id: email, password }, { cancelToken })).data;
	}
}
