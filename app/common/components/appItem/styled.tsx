import styled from "styled-components";
import { lighten } from "@material-ui/core/styles";

export const ItemWrapper = styled.div`
	padding: 1rem;
	border: 0.1rem solid;
	border-color: ${props => props.theme.grey600};
	border-radius: 0.5rem;
	background-color: ${props => props.theme.white100};
	box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.7);

	& + & {
		margin-top: 0.7rem;
	}
`;

export const Title = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
`;

export const SubTitle = styled.div`
	font-size: 0.9rem;
	color: ${props => props.theme.grey800};
`;

export const ExtraText = styled.div`
	margin-top: 0.3rem;
	font-size: 0.8rem;
	color: ${props => props.theme.grey700};
`;
