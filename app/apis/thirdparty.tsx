import { CancelToken } from "axios";
import AxiosInstance from "./base";

export default class ThirdPartyAPI {
	public static async createNewThirdParty(params: { appName: string; siteUrl: string }): Promise<{ result: string }> {
		return (await AxiosInstance().post("/third-party/new", params)).data;
	}
}
