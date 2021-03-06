import { AllActions } from "app/actions";
import { APP_TYPES, USER_TYPES } from "app/actions/types";

export interface IState {
	currentUser: Model.IRawUser | null;
}

export const INITIAL_STATE: IState = {
	currentUser: null,
};

export function reducer(state = INITIAL_STATE, action: AllActions): IState {
	switch (action.type) {
		case APP_TYPES.CHANGE_CURRENT_USER: {
			return {
				currentUser: action.payload.userData,
			};
		}

		case USER_TYPES.CHANGED_PRIVILEGE_AS_DEVELOPER: {
			return {
				currentUser: {
					...state.currentUser,
					role: 1000,
				},
			};
		}

		case APP_TYPES.SIGN_OUT: {
			return INITIAL_STATE;
		}

		default:
			return state;
	}
}
