import * as React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IAppState } from "app/rootReducer";
import { WrappedComponentProps, injectIntl, FormattedMessage } from "react-intl";
import { openFpaSnackBar } from "common/components/fpaSnackBar/action";
import { createNewThirdPartyApp } from "app/actions/thirdparty";

import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import RightAlignment from "common/components/rightAlignment";
import AuthorizedOnlyComponent from "common/components/AuthorizedOnlyComponet";
import { Wrapper, SubmitButton } from "./styled";

interface IProps
	extends ReturnType<typeof mapStateToProps>,
		ReturnType<typeof mapDispatchToProps>,
		WrappedComponentProps {}

interface IState {
	appName: string;
	siteUrl: string;
}

function mapStateToProps(state: IAppState) {
	return {
		currentUser: state.app.currentUser,
		pageState: state.thirdPartyPage,
		dataState: state.thirdPartyData,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return bindActionCreators(
		{
			createNewThirdPartyApp,
			openFpaSnackBar,
		},
		dispatch,
	);
}

class CreateThirdPartyPage extends React.PureComponent<IProps, IState> {
	public state: IState = {
		appName: "",
		siteUrl: "",
	};

	private readonly refSiteUrlInput = React.createRef<HTMLInputElement>();

	public componentWillUnmount() {
		this.clearState();
	}

	public render() {
		const { intl, pageState } = this.props;
		const { appName, siteUrl } = this.state;

		const appNameIntl = intl.formatMessage({ id: "third_party.field_app_name" });

		const siteUrlIntl = intl.formatMessage({ id: "third_party.field_site_url" });
		return (
			<AuthorizedOnlyComponent>
				<Wrapper>
					<TextField
						id="filled-appName"
						value={appName}
						label={appNameIntl}
						type="text"
						className="input"
						autoFocus={true}
						margin="normal"
						data-next-focus="site-url"
						required={true}
						onChange={this.handleAppNameChange}
						onKeyDown={this.handleKeyDown}
						classes={{
							root: ".input",
						}}
					/>

					<TextField
						inputRef={this.refSiteUrlInput}
						id="filled-siteurl"
						value={siteUrl}
						label={siteUrlIntl}
						type="url"
						className="input"
						margin="normal"
						data-next-focus="submit"
						required={true}
						onChange={this.handleSiteUrlChange}
						onKeyDown={this.handleKeyDown}
					/>

					<RightAlignment>
						<SubmitButton disabled={pageState.isCreateLoading} onClick={this.createNewApp}>
							{pageState.isCreateLoading ? (
								<CircularProgress color="primary" size={20} classes={{ colorPrimary: "loading" }} />
							) : (
								<FormattedMessage id="third_party.field_submit" />
							)}
						</SubmitButton>
					</RightAlignment>
				</Wrapper>
			</AuthorizedOnlyComponent>
		);
	}

	private readonly handleAppNameChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		const value = e.currentTarget.value;
		this.setState({
			appName: value,
		});
	};
	private readonly handleSiteUrlChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		const value = e.currentTarget.value;
		this.setState({
			siteUrl: value,
		});
	};

	private readonly handleKeyDown: React.KeyboardEventHandler = e => {
		if (e.keyCode === 13) {
			const nextTarget = e.currentTarget.getAttribute("data-next-focus");
			switch (nextTarget) {
				case "site-url":
					const siteurl = this.refSiteUrlInput.current;
					siteurl.focus();
					return;
				case "submit": {
					this.createNewApp();
				}
				default:
					return;
			}
		}
	};

	private readonly createNewApp = () => {
		const { pageState, createNewThirdPartyApp, openFpaSnackBar } = this.props;
		const { appName, siteUrl } = this.state;

		if (!pageState.isCreateLoading && appName !== "" && siteUrl !== "") {
			createNewThirdPartyApp(
				{
					appName,
					siteUrl,
				},
				() => {
					this.clearState();
				},
			);
		} else {
			openFpaSnackBar({
				messageId: "third_party.field_error_empty",
			});
		}
	};

	private readonly clearState = () => {
		this.setState({
			appName: "",
			siteUrl: "",
		});
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(injectIntl(CreateThirdPartyPage));
