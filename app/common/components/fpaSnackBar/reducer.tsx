import { AllActions } from "app/actions";
import { FPA_SNACK_BAR } from "app/actions/types";

export interface IFpaSnackBarState {
	isOpen: boolean;
	message: string;
	messageId: string;
}

export const INITIAL_STATE: IFpaSnackBarState = {
	isOpen: false,
	message: "",
	messageId: "",
};

export function reducer(state = INITIAL_STATE, action: AllActions): IFpaSnackBarState {
	switch (action.type) {
		case FPA_SNACK_BAR.OPEN: {
			const { message = "", messageId = "" } = action.payload;
			return {
				message,
				messageId,
				isOpen: true,
			};
		}

		case FPA_SNACK_BAR.CLOSE: {
			return {
				message: "",
				messageId: "",
				isOpen: false,
			};
		}

		default:
			return state;
	}
}
