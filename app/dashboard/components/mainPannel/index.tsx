import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../home";
import RegisteredApps from "../registeredApps";
import CreateThirdPartyPage from "app/thirdparty/createThirdPartyPage";

interface IProps {}

const MainRoutePanel: React.FC<IProps> = () => {
	return (
		<Switch>
			<Route exact path="/dashboard/app_create" component={CreateThirdPartyPage} />
			<Route exact path="/dashboard/app_manage" component={RegisteredApps} />
			<Route path={["/dashboard", "/dashboard/home"]} component={Home} />
		</Switch>
	);
};

export default MainRoutePanel;
