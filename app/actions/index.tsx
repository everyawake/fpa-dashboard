import { Action } from "redux";
import { ActionTypes as AppActionTypes } from "./app";
import { ActionTypes as SignInActionTypes } from "./signIn";

export type AllActions = AppActionTypes | SignInActionTypes;
