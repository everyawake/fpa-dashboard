import { AllActions } from "app/actions";
import { THIRD_PARTY_TYPES } from "app/actions/types";
export interface IThirdPartyData {
	ownedApps: ReadonlyArray<Model.IRawMyOwnedApp>;
	registeredApps: ReadonlyArray<Model.IRawMyRegisteredApp>;
}

export const INITIAL_STATE: IThirdPartyData = {
	ownedApps: [],
	registeredApps: [],
};

export function reducer(state = INITIAL_STATE, action: AllActions): IThirdPartyData {
	switch (action.type) {
		case THIRD_PARTY_TYPES.FETCHED_OWN_APPS: {
			return {
				...state,
				ownedApps: action.payload.apps,
			};
		}

		case THIRD_PARTY_TYPES.FETCHED_REGISTERED_APPS: {
			return {
				...state,
				registeredApps: action.payload.apps,
			};
		}

		default:
			return state;
	}
}
