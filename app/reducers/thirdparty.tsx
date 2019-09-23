import { AllActions } from "app/actions";
export interface IThirdPartyData {
	apps: ReadonlyArray<Model.IRawThirdParty>;
}

export const INITIAL_STATE: IThirdPartyData = {
	apps: [],
};

export function reducer(state = INITIAL_STATE, action: AllActions) {
	switch (action.type) {
		default:
			return state;
	}
}
