import styled from "styled-components";

export const BaseWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	background-color: ${props => props.theme.primary};
`;
