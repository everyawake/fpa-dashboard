import { CancelToken } from "axios";
import { THIRD_PARTY_TYPES } from "./types";
import ThirdPartyAPI from "app/apis/thirdparty";
import { ActionExtractor, ActionThunk } from "common/helpers/reduxHelper";
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

	startFetchingOwnApps: () => createAction({ type: THIRD_PARTY_TYPES.START_FETCHING_OWN_APPS }),
	fetchedOwnApps: (apps: ReadonlyArray<Model.IRawMyOwnedApp>) =>
		createAction({ type: THIRD_PARTY_TYPES.FETCHED_OWN_APPS, payload: { apps } }),
	failedFetchingOwnApps: () => createAction({ type: THIRD_PARTY_TYPES.FAILED_FETCHING_OWN_APPS }),

	startFetchingRegisteredApps: () => createAction({ type: THIRD_PARTY_TYPES.START_FETCHING_REGISTERED_APPS }),
	fetchedRegisteredApps: (apps: ReadonlyArray<Model.IRawMyRegisteredApp>) =>
		createAction({ type: THIRD_PARTY_TYPES.FETCHED_REGISTERED_APPS, payload: { apps } }),
	failedFetchingRegisteredApps: () => createAction({ type: THIRD_PARTY_TYPES.FAILED_FETCHING_REGISTERED_APPS }),
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
			dispatch(ActionCreator.createdThirdParty(params));
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

export function getMyOwnApps(cancelToken: CancelToken): ActionThunk {
	return async dispatch => {
		dispatch(ActionCreator.startFetchingOwnApps());

		try {
			const result = await ThirdPartyAPI.getMyOwnApps({
				cancelToken,
			});

			dispatch(ActionCreator.fetchedOwnApps(result.result));
		} catch (err) {
			dispatch(ActionCreator.failedFetchingOwnApps());
		}
	};
}

export function getMyRegisteredApps(cancelToken: CancelToken): ActionThunk {
	return async dispatch => {
		dispatch(ActionCreator.startFetchingRegisteredApps());

		try {
			const result = await ThirdPartyAPI.getMyRegisteredApps({
				cancelToken,
			});

			dispatch(ActionCreator.fetchedRegisteredApps(result.result));
		} catch (err) {
			dispatch(ActionCreator.failedFetchingRegisteredApps());
		}
	};
}
