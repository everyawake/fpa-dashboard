import styled from "styled-components";
import { BaseWrapper } from "common/components/baseWrapper";

export const Wrapper = styled(BaseWrapper)`
	padding: 2rem;
`;

export const List = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;

	.inner {
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.loading {
		color: ${props => props.theme.white100} !important;
	}
`;
