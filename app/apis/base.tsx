import axios from "axios";
import { getAuthToken } from "common/helpers/authTokenHelper";

const END_POINT = "https://fpa-backend.herokuapp.com";

export default () =>
	axios.create({
		baseURL: END_POINT,
		headers: {
			"fpa-authenticate-token": getAuthToken(),
		},
	});
