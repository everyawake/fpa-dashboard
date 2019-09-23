import AxiosInstance from "./base";

export default class UserAPI {
	public static async setPrivilegeAsDeveloper(): Promise<{ result: string }> {
		return (await AxiosInstance().put("/users/privilege-developer")).data;
	}
}
