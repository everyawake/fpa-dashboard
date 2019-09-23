import { THIRD_PARTY_TYPES } from "./types";
import { ActionExtractor, ActionThunk } from "common/helpers/reduxHelper";
import ThirdPartyAPI from "../apis/thirdparty";
import { openFpaSnackBar } from "common/components/fpaSnackBar/action";

function createAction<T extends { type: THIRD_PARTY_TYPES }>(d: T): T {
	return d;
}

export const ActionCreator = {
	startCreateThirdParty: () =>
		createAction({
			type: THIRD_PARTY_TYPES.START_CREATE_THIRD_PARTY,
		}),
	createdThirdParty: (payload: { appName: string; siteUrl: string }) =>
		createAction({
			type: THIRD_PARTY_TYPES.CREATED_THIRD_PARTY,
			payload,
		}),
	failedCreateThirdParty: () =>
		createAction({
			type: THIRD_PARTY_TYPES.FAILED_CREATE_THIRD_PARTY,
		}),
};

export type ActionTypes = ActionExtractor<typeof ActionCreator>;

export function createNewThirdPartyApp(
	params: { appName: string; siteUrl: string },
	successFunction?: VoidFunction,
): ActionThunk {
	return async dispatch => {
		dispatch(ActionCreator.startCreateThirdParty());
		try {
			await ThirdPartyAPI.createNewThirdParty(params);
			dispatch(openFpaSnackBar({ messageId: "third_party.create_done" }));
			if (successFunction) successFunction();
		} catch (err) {
			dispatch(ActionCreator.failedCreateThirdParty());
			if (err.response) {
				switch (err.response.status) {
					case 400: {
						dispatch(openFpaSnackBar({ messageId: "third_party.error_400" }));
						return;
					}

					case 401: {
						dispatch(openFpaSnackBar({ messageId: "third_party.error_401" }));
						return;
					}

					default:
					case 422: {
						dispatch(openFpaSnackBar({ messageId: "third_party.error_other" }));
						return;
					}
				}
			}
			dispatch(openFpaSnackBar({ messageId: "third_party.error_other" }));
		}
	};
}
