import { Action } from "redux";
import { ActionTypes as AppActionTypes } from "./app";
import { ActionTypes as SignInActionTypes } from "./signIn";
import { ActionTypes as FPAActionTypes } from "common/components/fpaSnackBar/action";

export type AllActions = AppActionTypes | SignInActionTypes | FPAActionTypes;
