import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import AppItem from ".";

storiesOf("Common/AppItem", module)
	.add("OwnedApp", () => (
		<AppItem
			type="OwnApp"
			data={{
				secret_key: "",
				public_key: "sldkfjalkejf_public_key",
				name: "appNAme",
				site_url: "https://www.dongdong.dot",
			}}
		/>
	))
	.add("RegisteredApp", () => (
		<AppItem
			type="RegisteredApp"
			data={{
				app_public_key: "slkjfeinlskef_public_key",
				token: "j9-j93j9023f23f;ons9fjijp3923jfoij",
				name: "appNAme",
				site_url: "https://www.dongdong.dot",
				issued_date: "2019-09-29",
			}}
		/>
	));
