import { AllActions } from "app/actions";
import { THIRD_PARTY_TYPES } from "app/actions/types";

export interface IThirdPartyPageState {
	isCreateLoading: boolean;
	isCreateFailed: boolean;
}

export const INITIAL_STATE: IThirdPartyPageState = {
	isCreateLoading: false,
	isCreateFailed: false,
};

export function reducer(state = INITIAL_STATE, action: AllActions): IThirdPartyPageState {
	switch (action.type) {
		case THIRD_PARTY_TYPES.START_CREATE_THIRD_PARTY: {
			return {
				isCreateLoading: true,
				isCreateFailed: false,
			};
		}

		case THIRD_PARTY_TYPES.CREATED_THIRD_PARTY: {
			return {
				isCreateLoading: false,
				isCreateFailed: false,
			};
		}

		case THIRD_PARTY_TYPES.FAILED_CREATE_THIRD_PARTY: {
			return {
				isCreateLoading: false,
				isCreateFailed: true,
			};
		}

		default:
			return state;
	}
}
