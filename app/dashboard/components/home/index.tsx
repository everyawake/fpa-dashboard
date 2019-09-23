import * as React from "react";
import { Wrapper } from "./styled";
import DeveloperPrivilegeButton from "common/components/developerPrivilegeButton";

export default class Home extends React.PureComponent<{}> {
	public render() {
		return (
			<Wrapper>
				<DeveloperPrivilegeButton />
			</Wrapper>
		);
	}
}
