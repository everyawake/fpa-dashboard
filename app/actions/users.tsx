import { USER_TYPES } from "./types";
import { ActionExtractor, ActionThunk } from "common/helpers/reduxHelper";
import { openFpaSnackBar } from "common/components/fpaSnackBar/action";
import UserAPI from "../apis/user";

function createAction<T extends { type: USER_TYPES }>(d: T): T {
	return d;
}

export const ActionCreator = {
	startChangePrivilegeAsDeveloper: () =>
		createAction({
			type: USER_TYPES.START_CHANGE_PRIVILEGE_AS_DEVELOPER,
		}),
	changedPrivilegeAsDeveloper: () =>
		createAction({
			type: USER_TYPES.CHANGED_PRIVILEGE_AS_DEVELOPER,
		}),
	failedChangePrivilegeAsDeveloper: () =>
		createAction({
			type: USER_TYPES.FAILED_CHANGE_PRIVILEGE_AS_DEVELOPER,
		}),
};

export type ActionTypes = ActionExtractor<typeof ActionCreator>;

export function changePrivilegeAsDeveloper(): ActionThunk {
	return async dispatch => {
		dispatch(ActionCreator.startChangePrivilegeAsDeveloper());
		try {
			await UserAPI.setPrivilegeAsDeveloper();
			dispatch(ActionCreator.changedPrivilegeAsDeveloper());
			dispatch(
				openFpaSnackBar({
					messageId: "user_privilege_change.done",
				}),
			);
		} catch (err) {
			dispatch(ActionCreator.failedChangePrivilegeAsDeveloper());
			if (err.response) {
				switch (err.response.status) {
					case 401: {
						dispatch(
							openFpaSnackBar({
								messageId: "user_privilege_change.error_401",
							}),
						);
						return;
					}

					default:
					case 422: {
						dispatch(
							openFpaSnackBar({
								messageId: "user_privilege_change.error_422",
							}),
						);
						return;
					}
				}
			}
		}
	};
}
