import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyleOption = createGlobalStyle`

	html,
	body,
	#mainContainer {
		width:100%;
		height: 100%;
	}

  html,
	body,
	div,
	header,
	section,
	footer,
	aside,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		display: block;
		margin: 0;
		padding: 0;
	}

	p {
		margin: 0;
		padding: 0;
	}

	* {
		box-sizing: border-box;
		font-family: "Noto Sans KR", "Helvetica", "sans-serif" !important;
	}
`;

export const RootWrapper = styled.div`
	width: 100%;
	height: 100%;
`;
