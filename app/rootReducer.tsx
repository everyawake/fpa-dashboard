import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
// child reducers
import * as appReducer from "app/reducers/app";
import * as fpaSnackBarReducer from "common/components/fpaSnackBar/reducer";
import * as ThirdPartyDataReducer from "app/reducers/thirdparty";

// page reducers
import * as ThirdPartyPageReducer from "app/thirdparty/reducer";

import * as DeveloperPrivilegeButtonReducer from "common/components/developerPrivilegeButton/reudcer";

export interface IAppState {
	router: RouterState;
	app: appReducer.IState;
	fpaSnackBar: fpaSnackBarReducer.IFpaSnackBarState;
	thirdPartyPage: ThirdPartyPageReducer.IThirdPartyPageState;
	thirdPartyData: ThirdPartyDataReducer.IThirdPartyData;

	developerPrivilegeButton: DeveloperPrivilegeButtonReducer.IDeveloperPrivilegeButtonState;
}

export const INITIAL_APP_STORE_STATE: IAppState = {
	router: {} as any,
	app: appReducer.INITIAL_STATE,
	fpaSnackBar: fpaSnackBarReducer.INITIAL_STATE,
	thirdPartyPage: ThirdPartyPageReducer.INITIAL_STATE,
	thirdPartyData: ThirdPartyDataReducer.INITIAL_STATE,

	developerPrivilegeButton: DeveloperPrivilegeButtonReducer.INITIAL_STATE,
};

const rootReducer = (history: History) =>
	combineReducers<IAppState>({
		router: connectRouter(history),
		app: appReducer.reducer,
		fpaSnackBar: fpaSnackBarReducer.reducer,
		thirdPartyPage: ThirdPartyPageReducer.reducer,
		thirdPartyData: ThirdPartyDataReducer.reducer,

		developerPrivilegeButton: DeveloperPrivilegeButtonReducer.reducer,
	});

export default rootReducer;
