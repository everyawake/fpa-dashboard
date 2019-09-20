import styled from "styled-components";
import { BaseWrapper } from "common/components/baseWrapper";

export const Wrapper = styled(BaseWrapper)`
	display: flex;
	flex-direction: row;
`;

export const MainPanel = styled.div`
	flex: 1;
`;

interface INavigationPanelProps {
	isFold: boolean;
}

export const NavigationPanelWrapper = styled.div<INavigationPanelProps>`
	position: relative;
	width: ${props => (props.isFold ? "6rem" : "20rem")};
	padding: ${props => (props.isFold ? ".5rem" : "1rem")};

	background-color: ${props => props.theme.lighter};

	transition: width 300ms ease-in-out;
`;
