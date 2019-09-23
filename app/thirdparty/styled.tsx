import styled from "styled-components";
import ButtonBase from "@material-ui/core/ButtonBase";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	width: 100%;
	height: 100%;

	padding: 2rem;

	.input {
		input.MuiInput-input {
			color: ${props => props.theme.white100};
		}

		label.Mui-focused {
			color: ${props => props.theme.buttonColor};
		}

		.MuiInput-underline:after {
			border-bottom-color: ${props => props.theme.buttonColor};
		}
	}
`;

export const SubmitButton = styled(ButtonBase)`
	width: 4rem;
	height: 2.5rem;
	background-color: ${props => props.theme.buttonColor} !important;
	border-radius: 0.3rem !important;

	font-size: 0.9rem;
	color: ${props => props.theme.white100} !important;
	margin-top: 1rem !important;

	.loading {
		color: ${props => props.theme.white100} !important;
	}
`;
