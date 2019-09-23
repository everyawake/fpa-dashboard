import styled from "styled-components";
import { rgba } from "polished";
import Button from "@material-ui/core/Button";
import { BaseWrapper } from "common/components/baseWrapper";

export const Wrapper = styled(BaseWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Box = styled.div`
	width: 30rem;
	height: 30rem;
	border-radius: 1rem;
	background-color: ${props => props.theme.white100};
	display: flex;
	flex-direction: column;

	padding: 1rem;

	box-shadow: 0.2rem 0.2rem 1rem 0.1rem ${props => rgba(props.theme.black, 0.75)};
`;

export const HeaderWrapper = styled.header`
	width: 100%;
`;

export const MainTitle = styled.h1`
	font-size: 2.5rem;
	line-height: 2;
	font-weight: bold;
	color: ${props => props.theme.grey1000};
`;

export const SubTitle = styled.h3`
	font-size: 1rem;
	color: ${props => props.theme.grey800};
`;

export const Body = styled.div`
	flex: 1;
	.input {
		width: 100%;
	}
`;

export const SignInButton = styled(Button)`
	margin-left: 0.8rem !important;
	background-color: ${props => props.theme.buttonColor} !important;
`;

export const SignUpButton = styled(Button)`
	a {
		color: ${props => props.theme.grey800};
		text-decoration: none;
	}
`;

export const Footer = styled.footer`
	width: 100%;
	text-align: right;
	font-size: 1rem;
	color: ${props => props.theme.grey800};
`;
