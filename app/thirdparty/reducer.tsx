import { AllActions } from "app/actions";
import { THIRD_PARTY_TYPES } from "app/actions/types";

export interface IThirdPartyPageState {
	isCreateLoading: boolean;
	isCreateFailed: boolean;

	isOwnedAppLoading: boolean;
	isOwnedAppFailed: boolean;

	isRegisteredAppLoading: boolean;
	isRegisteredAppFailed: boolean;
}

export const INITIAL_STATE: IThirdPartyPageState = {
	isCreateLoading: false,
	isCreateFailed: false,
	isOwnedAppLoading: false,
	isOwnedAppFailed: false,
	isRegisteredAppLoading: false,
	isRegisteredAppFailed: false,
};

export function reducer(state = INITIAL_STATE, action: AllActions): IThirdPartyPageState {
	switch (action.type) {
		case THIRD_PARTY_TYPES.START_FETCHING_OWN_APPS: {
			return {
				...state,
				isOwnedAppLoading: true,
				isOwnedAppFailed: false,
			};
		}
		case THIRD_PARTY_TYPES.FETCHED_OWN_APPS: {
			return {
				...state,
				isOwnedAppLoading: false,
				isOwnedAppFailed: false,
			};
		}
		case THIRD_PARTY_TYPES.FAILED_FETCHING_OWN_APPS: {
			return {
				...state,
				isOwnedAppLoading: false,
				isOwnedAppFailed: true,
			};
		}

		case THIRD_PARTY_TYPES.START_FETCHING_REGISTERED_APPS: {
			return {
				...state,
				isRegisteredAppLoading: true,
				isRegisteredAppFailed: false,
			};
		}
		case THIRD_PARTY_TYPES.FETCHED_REGISTERED_APPS: {
			return {
				...state,
				isRegisteredAppLoading: false,
				isRegisteredAppFailed: false,
			};
		}
		case THIRD_PARTY_TYPES.FAILED_FETCHING_REGISTERED_APPS: {
			return {
				...state,
				isRegisteredAppLoading: false,
				isRegisteredAppFailed: true,
			};
		}

		case THIRD_PARTY_TYPES.START_CREATE_THIRD_PARTY: {
			return {
				...state,
				isCreateLoading: true,
				isCreateFailed: false,
			};
		}

		case THIRD_PARTY_TYPES.CREATED_THIRD_PARTY: {
			return {
				...state,
				isCreateLoading: false,
				isCreateFailed: false,
			};
		}

		case THIRD_PARTY_TYPES.FAILED_CREATE_THIRD_PARTY: {
			return {
				...state,
				isCreateLoading: false,
				isCreateFailed: true,
			};
		}

		default:
			return state;
	}
}
