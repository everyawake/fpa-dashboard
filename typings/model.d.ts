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

	interface IRawMyOwnedApp
		extends Readonly<{
			secret_key: string;
			public_key: string;
			name: string;
			site_url: string;
		}> {}

	interface IRawMyRegisteredApp
		extends Readonly<{
			app_public_key: string;
			name: string;
			site_url: string;
			token: string;
			issued_date: string;
		}> {}
}
