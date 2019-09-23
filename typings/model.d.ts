declare namespace Model {
	interface IRawUser
		extends Readonly<{
			id: string;
			email: string;
			username: string;
			deviceUuid: string;
			role: number;
			confirmed: boolean;
		}> {}

	interface IRawThirdParty
		extends Readonly<{
			appName: string;
			siteUrl: string;
			publicKey: string;
			privateKey: string;
			owner: string;
		}> {}
}
