import { AllActions } from "app/actions";
import { USER_TYPES } from "app/actions/types";
export interface IDeveloperPrivilegeButtonState {
	isLoading: boolean;
	isFailed: boolean;
}

export const INITIAL_STATE: IDeveloperPrivilegeButtonState = {
	isLoading: false,
	isFailed: false,
};

export function reducer(state = INITIAL_STATE, action: AllActions): IDeveloperPrivilegeButtonState {
	switch (action.type) {
		case USER_TYPES.START_CHANGE_PRIVILEGE_AS_DEVELOPER: {
			return {
				isLoading: true,
				isFailed: false,
			};
		}

		case USER_TYPES.CHANGED_PRIVILEGE_AS_DEVELOPER: {
			return {
				isLoading: false,
				isFailed: false,
			};
		}

		case USER_TYPES.FAILED_CHANGE_PRIVILEGE_AS_DEVELOPER: {
			return {
				isLoading: false,
				isFailed: true,
			};
		}

		default:
			return state;
	}
}
