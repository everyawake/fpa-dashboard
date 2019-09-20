import * as React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { FormattedMessage } from "react-intl";
import { push } from "connected-react-router";
// interfaces
import { IAppState } from "app/rootReducer";
// components
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import {
	Wrapper,
	Box,
	HeaderWrapper,
	MainTitle,
	SubTitle,
	Body,
	RightAlignment,
	SignUpButton,
	SignInButton,
	Footer,
} from "./styled";
// actions
import { signIn } from "app/actions/signIn";
import { openFpaSnackBar } from "common/components/fpaSnackBar/action";

function mapStateToProps(state: IAppState) {
	return {
		currentUser: state.app.currentUser,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return bindActionCreators(
		{
			signIn,
			goHome: () => push("/dashboard"),
			openFpaSnackBar,
		},
		dispatch,
	);
}

interface IProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> {}

interface IState {
	email: string;
	password: string;
}

class Hello extends React.Component<IProps, IState> {
	public state: IState = {
		email: "",
		password: "",
	};

	private readonly refPasswordField = React.createRef<HTMLInputElement>();
	private readonly cancelTokenSource = axios.CancelToken.source();

	public componentDidMount() {
		const { goHome, currentUser } = this.props;
		if (currentUser) {
			goHome();
		}
	}

	public componentWillUnmount() {
		this.cancelTokenSource.cancel();
	}

	public render() {
		return (
			<Wrapper>
				<Box>
					<HeaderWrapper>
						<MainTitle>
							<FormattedMessage id="landing.title.main" />
						</MainTitle>
						<SubTitle>
							<FormattedMessage id="landing.title.sub" />
						</SubTitle>
					</HeaderWrapper>
					<Body>
						<TextField
							id="filled-email"
							label="Email"
							type="email"
							className="input"
							autoFocus={true}
							margin="normal"
							data-next-focus="password"
							onChange={this.handleEmailChange}
							onKeyDown={this.handleKeyDown}
						/>

						<TextField
							inputRef={this.refPasswordField}
							id="filled-password"
							label="Password"
							type="password"
							className="input"
							margin="normal"
							data-next-focus="submit"
							onChange={this.handlePasswordChange}
							onKeyDown={this.handleKeyDown}
						/>

						<RightAlignment>
							<SignUpButton variant="text" tabIndex={2}>
								<Link to="/signup">
									<FormattedMessage id="signUp" />
								</Link>
							</SignUpButton>

							<SignInButton variant="contained" color="primary" tabIndex={1} onClick={this.submitSignIn}>
								<FormattedMessage id="signIn" />
							</SignInButton>
						</RightAlignment>
					</Body>

					<Footer>©2019 EveryAwake</Footer>
				</Box>
			</Wrapper>
		);
	}

	private readonly handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		const value = e.currentTarget.value;

		this.setState({
			email: value,
		});
	};

	private readonly handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		const value = e.currentTarget.value;

		this.setState({
			password: value,
		});
	};

	private readonly handleKeyDown: React.KeyboardEventHandler = e => {
		if (e.keyCode === 13) {
			const nextTarget = e.currentTarget.getAttribute("data-next-focus");
			switch (nextTarget) {
				case "password":
					const password = this.refPasswordField.current;
					password.focus();
					return;
				case "submit": {
					this.submitSignIn();
				}
				default:
					return;
			}
		}
	};

	private readonly submitSignIn = () => {
		const { signIn, goHome, openFpaSnackBar } = this.props;
		const { email, password } = this.state;
		if (email === "" || password === "") {
			openFpaSnackBar({ messageId: "signIn.invalid" });
		} else {
			signIn({
				email,
				password,
				cancelToken: this.cancelTokenSource.token,
				successCallback: goHome,
			});
		}
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Hello);
