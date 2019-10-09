import * as React from "react";
import { ItemWrapper, Title, SubTitle, ExtraText } from "./styled";

type OwnAppProps = {
	type: "OwnApp";
	data: Model.IRawMyOwnedApp;
};

type RegisteredAppProps = {
	type: "RegisteredApp";
	data: Model.IRawMyRegisteredApp;
};

type IProps = OwnAppProps | RegisteredAppProps;

const AppItem: React.FC<IProps> = ({ type, data }) => {
	const appName = data.name;
	const siteUrl = data.site_url;

	return (
		<ItemWrapper>
			<Title>{appName}</Title>
			<SubTitle>{siteUrl}</SubTitle>
			{type === "OwnApp" ? <ExtraText>[Public key] : {(data as Model.IRawMyOwnedApp).public_key}</ExtraText> : null}
		</ItemWrapper>
	);
};

export default AppItem;
