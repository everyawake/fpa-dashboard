import styled from "styled-components";
import ButtonBase from "@material-ui/core/ButtonBase";
import { darken, rgba } from "polished";
import { Link, LinkProps } from "react-router-dom";
import * as React from "react";

export const FoldButton = styled(ButtonBase)`
	position: absolute !important;
	top: 1rem;
	right: -2rem;

	width: 2rem;
	height: 2rem;

	.icon {
		width: 2rem;
		height: 2rem;
	}
`;

export const LogoutButton = styled(ButtonBase)`
	width: 1.5rem;
	height: 1.5rem;

	.icon {
		width: 1.5rem;
		height: 1.5rem;
	}
`;

export const Header = styled.header`
	width: 100%;
	border-bottom: 1px solid ${props => rgba(props.theme.white100, 0.9)};
	margin-bottom: 2rem;
	padding-bottom: 1rem;

	.username {
		display: inline-flex;
		align-items: flex-end;
		color: ${props => props.theme.grey1000};
		font-size: 2rem;
		line-height: 1.7;
		font-weight: bold;
		margin-bottom: 0.8rem;
	}
	.guide {
		color: ${props => darken(0.05, props.theme.white100)};
		font-size: 1rem;
		line-height: 1.14;
	}
`;

export const NavWrapper = styled.div`
	a {
		width: 100%;
		text-decoration: none;
	}
`;

export const NavBar = styled.span<{ isSelected: boolean }>`
	width: 100%;
	border-radius: 0.3rem;

	padding: 0.4rem 0.4rem;
	margin: 0.5rem;

	display: inline-block;
	color: ${props => props.theme.white100};
	font-size: 1.3rem;
	line-height: 1.2;

	transition: background-color 150ms ease-in-out;

	${props => (props.isSelected ? `background-color: ${props.theme.buttonColor};` : "")}

	&:hover {
		background-color: ${props => rgba(props.theme.buttonColor, 0.55)};
	}
`;
