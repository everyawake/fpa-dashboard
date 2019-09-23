import * as React from "React";
import styled from "styled-components";
import { useStore } from "react-redux";
import { bindActionCreators } from "redux";
import { FormattedMessage } from "react-intl";
import ButtonBase from "@material-ui/core/ButtonBase";
import CircularProgress from "@material-ui/core/CircularProgress";

import { IAppState } from "app/rootReducer";
import { changePrivilegeAsDeveloper } from "app/actions/users";
import { AllActions } from "app/actions";

const Button = styled(ButtonBase)`
	height: 2.5rem;
	background-color: ${props => props.theme.buttonColor} !important;
	border-radius: 0.3rem !important;

	font-size: 0.9rem;
	color: ${props => props.theme.white100} !important;
	margin-top: 1rem !important;
	padding: 0 1rem !important;

	.loading {
		color: ${props => props.theme.white100} !important;
	}
`;

const DeveloperPrivilegeButton: React.FC = () => {
	const { getState, dispatch } = useStore<IAppState, AllActions>();
	const { app, developerPrivilegeButton } = getState();
	const { changePrivilege } = bindActionCreators(
		{
			changePrivilege: changePrivilegeAsDeveloper,
		},
		dispatch,
	);

	const handleClick = () => {
		if (app.currentUser && !developerPrivilegeButton.isLoading) {
			changePrivilege();
		}
	};
	return (
		<Button onClick={handleClick}>
			{developerPrivilegeButton.isLoading ? (
				<CircularProgress color="primary" size={20} classes={{ colorPrimary: "loading" }} />
			) : (
				<FormattedMessage id="user_privilege_change.button_text" />
			)}
		</Button>
	);
};

export default DeveloperPrivilegeButton;
