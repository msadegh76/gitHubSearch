import axios from "axios";

const baseURL = "https://api.github.com/search/users";

export default async function userListService(user) {
	return axios
		.get(baseURL + `?q=${user}&client_id=undefined&client_secret=undefined`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => console.log("ERROR", error));
}
