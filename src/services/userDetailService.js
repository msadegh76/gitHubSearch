import axios from "axios";

const baseURL = "https://api.github.com/users";

export default async function userDetailService(user) {
	return axios
		.get(baseURL + `/${user}?client_id=undefined&client_secret=undefined`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => console.log("ERROR", error));
}
// THIS service will be use to fetch data for user detail page
