import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { FormattedMessage } from "react-intl";
import SnackBar from "@material-ui/core/Snackbar";
import { IAppState } from "app/rootReducer";
import { closeFpaSnackBar } from "./action";

function mapStateToProps(state: IAppState) {
	return {
		...state.fpaSnackBar,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return bindActionCreators(
		{
			handleClose: closeFpaSnackBar,
		},
		dispatch,
	);
}

interface IProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> {}

class FpaSnackBar extends React.PureComponent<IProps> {
	public render() {
		const { isOpen, handleClose, message, messageId } = this.props;

		const content = Boolean(message) ? message : Boolean(messageId) ? <FormattedMessage id={messageId} /> : "";

		return (
			<SnackBar
				open={isOpen}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				autoHideDuration={3000}
				message={content}
			/>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FpaSnackBar);
