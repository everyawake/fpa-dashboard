export enum APP_TYPES {
	CHANGE_CURRENT_USER = "APP.CHANGE_CURRENT_USER",

	SIGN_OUT = "APP.SIGN_OUT",
}

export enum SIGN_IN_TYPES {
	START_SIGN_IN = "SIGN_IN.START_SIGN_IN",
	SUCCEEDED_SIGN_IN = "SIGN_IN.SUCCEEDED_SIGN_IN",
	FAILED_SIGN_IN = "SIGN_IN.FAILED_SIGN_IN",
}

export enum FPA_SNACK_BAR {
	OPEN = "FPA_SNACK_BAR.OPEN",
	CLOSE = "FPA_SNACK_BAR.CLOSE",
}

export enum THIRD_PARTY_TYPES {
	START_CREATE_THIRD_PARTY = "THIRD_PARTY.START_CREATE_THIRD_PARTY",
	CREATED_THIRD_PARTY = "THIRD_PARTY.CREATED_THIRD_PARTY",
	FAILED_CREATE_THIRD_PARTY = "THIRD_PARTY.FAILED_CREATE_THIRD_PARTY",

	START_FETCHING_OWN_APPS = "THIRD_PARTY.START_FETCHING_OWN_APPS",
	FETCHED_OWN_APPS = "THIRD_PARTY.FETCHED_OWN_APPS",
	FAILED_FETCHING_OWN_APPS = "THIRD_PARTY.FAILED_FETCHING_OWN_APPS",

	START_FETCHING_REGISTERED_APPS = "THIRD_PARTY.START_FETCHING_REGISTERED_APPS",
	FETCHED_REGISTERED_APPS = "THIRD_PARTY.FETCHED_REGISTERED_APPS",
	FAILED_FETCHING_REGISTERED_APPS = "THIRD_PARTY.FAILED_FETCHING_REGISTERED_APPS",
}

export enum USER_TYPES {
	START_CHANGE_PRIVILEGE_AS_DEVELOPER = "USER.START_CHANGE_PRIVILEGE_AS_DEVELOPER",
	CHANGED_PRIVILEGE_AS_DEVELOPER = "USER.CHANGED_PRIVILEGE_AS_DEVELOPER",
	FAILED_CHANGE_PRIVILEGE_AS_DEVELOPER = "USER.FAILED_CHANGE_PRIVILEGE_AS_DEVELOPER",
}
