import { CancelToken } from "axios";
import AxiosInstance from "./base";

export default class ThirdPartyAPI {
	public static async createNewThirdParty(params: { appName: string; siteUrl: string }): Promise<{ result: string }> {
		return (await AxiosInstance().post("/third-party/new", params)).data;
	}

	public static async getMyOwnApps(params: {
		cancelToken: CancelToken;
	}): Promise<{
		result: ReadonlyArray<Model.IRawMyOwnedApp>;
	}> {
		return (await AxiosInstance().get("/users/my/owned-apps")).data;
	}

	public static async getMyRegisteredApps(params: {
		cancelToken: CancelToken;
	}): Promise<{
		result: ReadonlyArray<Model.IRawMyRegisteredApp>;
	}> {
		return (await AxiosInstance().get("/users/my/register-apps")).data;
	}
}
