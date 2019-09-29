import { lighten } from "polished";

const basicTheme: FPA.ITheme = {
	primary: "#3B3E45",
	darker: "#15181e",
	lighter: "#656870",
	buttonColor: "#63DBD6",
	white100: "#fff",
	black: "#000",
	grey1000: "#121212",
	grey900: lighten(0.2, "#121212"),
	grey800: lighten(0.4, "#121212"),
	grey700: lighten(0.6, "#121212"),
	grey600: lighten(0.8, "#121212"),
	grey500: lighten(1, "#121212"),
	grey400: lighten(1.2, "#121212"),
	grey300: lighten(1.4, "#121212"),
};

export default basicTheme;
