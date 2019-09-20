import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
// interfaces
import { IAppState } from "app/rootReducer";
// actions
import { signOut } from "app/actions/app";
// component
import AuthorizedOnlyComponent from "common/components/AuthorizedOnlyComponet";
import { Wrapper, MainPanel } from "./styled";
import NavigationPanel from "./components/navigationPanel";

function mapStateToProps(state: IAppState) {
	return {
		currentUser: state.app.currentUser,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return bindActionCreators(
		{
			signOut,
		},
		dispatch,
	);
}

interface IProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> {}

class Dashboard extends React.PureComponent<IProps> {
	public render() {
		const { signOut } = this.props;
		return (
			<AuthorizedOnlyComponent>
				<Wrapper>
					<NavigationPanel onLogout={signOut} />
					<MainPanel></MainPanel>
				</Wrapper>
			</AuthorizedOnlyComponent>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Dashboard);
