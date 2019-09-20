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
};

export default basicTheme;
