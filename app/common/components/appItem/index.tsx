import * as React from "react";
import { ItemWrapper, Title, SubTitle } from "./styled";

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
		</ItemWrapper>
	);
};

export default AppItem;
