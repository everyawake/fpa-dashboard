import { FPA_SNACK_BAR } from "app/actions/types";
import { ActionThunk, ActionExtractor } from "common/helpers/reduxHelper";

function createAction<T extends { type: FPA_SNACK_BAR }>(d: T): T {
	return d;
}

interface IOpenPayload {
	message?: string;
	messageId?: string;
}

export const ActionCreator = {
	open: (payload: IOpenPayload) =>
		createAction({
			type: FPA_SNACK_BAR.OPEN,
			payload,
		}),
	close: () =>
		createAction({
			type: FPA_SNACK_BAR.CLOSE,
		}),
};

export type ActionTypes = ActionExtractor<typeof ActionCreator>;

export function openFpaSnackBar(params: IOpenPayload): ActionThunk {
	return dispatch => {
		dispatch(ActionCreator.open(params));
	};
}

export function closeFpaSnackBar(): ActionThunk {
	return dispatch => {
		dispatch(ActionCreator.close());
	};
}
