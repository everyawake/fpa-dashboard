import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { Switch, Route } from "react-router";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";

import * as WebFont from "webfontloader";

import rootReducer from "./rootReducer";
import getMessages from "common/intl/getMessages";
import { getAuthByToken } from "./actions/signIn";

import theme from "common/theme";
import { GlobalStyleOption, RootWrapper } from "./rootStyled";
import FpaSnackBar from "common/components/fpaSnackBar";

import Landing from "./landing";
import Dashboard from "./dashboard";

class ClientRender {
	public async render() {
		const currentLocale = navigator.language.split("-")[0];
		const messages = getMessages(currentLocale);

		const history = createBrowserHistory();
		const middleWares: any = [thunk, routerMiddleware(history)];

		if (process.env.NODE_ENV === "development") {
			middleWares.push(createLogger());
		}

		const store = createStore(rootReducer(history), applyMiddleware(...middleWares));

		WebFont.load({
			google: {
				families: ["Noto Sans KR"],
			},
		});

		// getAuth & push data to store
		await (store.dispatch as any)(getAuthByToken());

		ReactDOM.render(
			<IntlProvider locale={navigator.language} messages={messages}>
				<Provider store={store}>
					<ConnectedRouter history={history}>
						<ThemeProvider theme={theme}>
							<RootWrapper>
								<Switch>
									<Route exact path={["/dashboard", "/dashboard/:tab"]} component={Dashboard} />
									<Route path="/" component={Landing} />
								</Switch>
								<GlobalStyleOption />
								<FpaSnackBar />
							</RootWrapper>
						</ThemeProvider>
					</ConnectedRouter>
				</Provider>
			</IntlProvider>,
			document.getElementById("mainContainer"),
		);
	}
}

const render = new ClientRender();
render.render();
