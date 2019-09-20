import { APP_TYPES } from "./types";
import { ActionThunk, ActionExtractor } from "common/helpers/reduxHelper";
import { clearAuthToken } from "common/helpers/authTokenHelper";
import { openFpaSnackBar } from "common/components/fpaSnackBar/action";

function createAction<T extends { type: APP_TYPES }>(d: T): T {
	return d;
}

export const ActionCreator = {
	changeCurrentUser: (userData: Model.IRawUser | null) =>
		createAction({
			type: APP_TYPES.CHANGE_CURRENT_USER,
			payload: { userData },
		}),
	signOut: () =>
		createAction({
			type: APP_TYPES.SIGN_OUT,
		}),
};

export type ActionTypes = ActionExtractor<typeof ActionCreator>;

export const changeCurrentUser = (params: { userData: Model.IRawUser | null }): ActionThunk => {
	return dispatch => {
		dispatch(ActionCreator.changeCurrentUser(params.userData));
	};
};

export const signOut = (): ActionThunk => {
	return dispatch => {
		dispatch(ActionCreator.signOut());
		clearAuthToken();
		dispatch(
			openFpaSnackBar({
				messageId: "signout.done",
			}),
		);
	};
};
