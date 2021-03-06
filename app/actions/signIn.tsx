import { SIGN_IN_TYPES } from "./types";
import { ActionExtractor, ActionThunk } from "common/helpers/reduxHelper";
import AuthAPI from "app/apis/auth";
import { changeCurrentUser } from "./app";
import { storeAuthToken } from "common/helpers/authTokenHelper";
import { openFpaSnackBar } from "common/components/fpaSnackBar/action";

function createAction<T extends { type: SIGN_IN_TYPES }>(d: T): T {
	return d;
}

export const ActionCreator = {
	startSignIn: () =>
		createAction({
			type: SIGN_IN_TYPES.START_SIGN_IN,
		}),
	succeededSignIn: () =>
		createAction({
			type: SIGN_IN_TYPES.SUCCEEDED_SIGN_IN,
		}),
	failedSignIn: () =>
		createAction({
			type: SIGN_IN_TYPES.FAILED_SIGN_IN,
		}),
};

export type ActionTypes = ActionExtractor<typeof ActionCreator>;

export function signIn(
	params: Parameters<typeof AuthAPI.signIn>[0] & {
		successCallback: VoidFunction;
	},
): ActionThunk {
	return async dispatch => {
		const { successCallback, ...rest } = params;
		try {
			dispatch(ActionCreator.startSignIn());
			const result = await AuthAPI.signIn(rest);

			dispatch(ActionCreator.succeededSignIn());
			dispatch(
				changeCurrentUser({
					userData: result.data,
				}),
			);
			storeAuthToken(result.token);
			dispatch(openFpaSnackBar({ messageId: "signIn.done" }));
			successCallback();
		} catch (err) {
			dispatch(ActionCreator.failedSignIn());
			dispatch(openFpaSnackBar({ messageId: "signIn.fail" }));
		}
	};
}

export function getAuthByToken(): ActionThunk {
	return async dispatch => {
		try {
			dispatch(ActionCreator.startSignIn());
			const result = await AuthAPI.getAuthByToken();

			dispatch(ActionCreator.succeededSignIn());
			dispatch(
				changeCurrentUser({
					userData: result.result,
				}),
			);
		} catch (err) {
			dispatch(ActionCreator.failedSignIn());
		}
	};
}
