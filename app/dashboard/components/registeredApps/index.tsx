import * as React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { CircularProgress } from "@material-ui/core";

import { List, Wrapper } from "./styled";
import { IAppState } from "app/rootReducer";
import { getMyRegisteredApps } from "app/actions/thirdparty";
import AppItem from "common/components/appItem";

interface IProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProp> {}

function mapStateToProps(state: IAppState) {
	return {
		pageState: state.thirdPartyPage,
		pageData: state.thirdPartyData,
	};
}

function mapDispatchToProp(dispatch: Dispatch) {
	return bindActionCreators(
		{
			getMyRegisteredApps,
		},
		dispatch,
	);
}

class MyRegisteredApps extends React.PureComponent<IProps> {
	private readonly cancelTokenSource = axios.CancelToken.source();

	public componentDidMount() {
		this.props.getMyRegisteredApps(this.cancelTokenSource.token);
	}

	public componentWillUnmount() {
		this.cancelTokenSource.cancel();
	}

	public render() {
		const { isRegisteredAppLoading } = this.props.pageState;
		return (
			<Wrapper>
				<List>
					<div className="inner">
						{isRegisteredAppLoading ? (
							<CircularProgress color="primary" size={20} classes={{ colorPrimary: "loading" }} />
						) : (
							this.renderApps()
						)}
					</div>
				</List>
			</Wrapper>
		);
	}

	private readonly renderApps = () => {
		return this.props.pageData.registeredApps.map(app => (
			<AppItem key={`${app.site_url}_${app.name}`} type="RegisteredApp" data={app} />
		));
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProp,
)(MyRegisteredApps);
