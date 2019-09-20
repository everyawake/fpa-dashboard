import * as React from "react";
import { useStore } from "react-redux";
import { Redirect } from "react-router";
import { IAppState } from "app/rootReducer";

const AuthorizedOnlyComponent: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	const mapState: IAppState = useStore().getState();
	if (mapState.app.currentUser) {
		return <>{children}</>;
	}
	return <Redirect to="/" />;
};

export default AuthorizedOnlyComponent;
