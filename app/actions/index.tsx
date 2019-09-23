import { Action } from "redux";
import { ActionTypes as AppActionTypes } from "./app";
import { ActionTypes as SignInActionTypes } from "./signIn";
import { ActionTypes as ThirdPartyTypes } from "./thirdparty";
import { ActionTypes as FPAActionTypes } from "common/components/fpaSnackBar/action";
import { ActionTypes as UserActionTypes } from "./users";

export type AllActions = AppActionTypes | SignInActionTypes | FPAActionTypes | ThirdPartyTypes | UserActionTypes;
