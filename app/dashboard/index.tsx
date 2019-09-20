import * as React from "react";
import { connect } from "react-redux";
// interfaces
import { IAppState } from "app/rootReducer";

// component
import AuthorizedOnlyComponent from "common/components/AuthorizedOnlyComponet";
import { Wrapper, MainPanel } from "./styled";
import NavigationPanel from "./components/navigationPanel";

function mapStateToProps(state: IAppState) {
	return {
		currentUser: state.app.currentUser,
	};
}

interface IProps extends ReturnType<typeof mapStateToProps> {}

class Dashboard extends React.PureComponent<IProps> {
	public render() {
		return (
			<AuthorizedOnlyComponent>
				<Wrapper>
					<NavigationPanel />
					<MainPanel></MainPanel>
				</Wrapper>
			</AuthorizedOnlyComponent>
		);
	}
}

export default connect(mapStateToProps)(Dashboard);
