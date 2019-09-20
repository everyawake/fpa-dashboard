import * as React from "react";
import { useStore } from "react-redux";
import { FormattedMessage } from "react-intl";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import LogOutIcon from "@material-ui/icons/NoEncryptionOutlined";
import { IAppState } from "app/rootReducer";
// components
import { NavigationPanelWrapper } from "app/dashboard/styled";
import { Header, NavWrapper, NavBar, LogoutButton } from "./styled";

interface IProps extends RouteComponentProps<{ tab: string }> {
	onLogout: VoidFunction;
}

const NavigationPanel: React.FC<IProps> = ({ match, onLogout }) => {
	const state: IAppState = useStore().getState();

	const isHome = !Boolean(match.params.tab) || match.params.tab === "home";
	const isAppCreate = Boolean(match.params.tab && match.params.tab === "app_create");
	const isAppManage = Boolean(match.params.tab && match.params.tab === "app_manage");

	return (
		<NavigationPanelWrapper isFold={false}>
			<Header>
				<div className="username">
					<span>[{state.app.currentUser.username}]</span>
					<LogoutButton onClick={onLogout}>
						<LogOutIcon className="icon" />
					</LogoutButton>
				</div>
				<p className="guide">
					<FormattedMessage id="welcome.1" />
				</p>
			</Header>

			<NavWrapper>
				<Link to="/dashboard/home">
					<NavBar isSelected={isHome}>
						<FormattedMessage id="nav.home" />
					</NavBar>
				</Link>
				<Link to="/dashboard/app_create">
					<NavBar isSelected={isAppCreate}>
						<FormattedMessage id="nav.third_party.register" />
					</NavBar>
				</Link>

				<Link to="/dashboard/app_manage">
					<NavBar isSelected={isAppManage}>
						<FormattedMessage id="nav.third_party.management" />
					</NavBar>
				</Link>
			</NavWrapper>
		</NavigationPanelWrapper>
	);
};

export default withRouter(NavigationPanel);
