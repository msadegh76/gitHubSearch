import axios from "axios";

const baseURL = "https://api.github.com/users/";

export default async function userReposService(user) {
	return axios
		.get(
			baseURL +
				`${user}/repos?per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined`
		)
		.then((response) => {
			return response.data;
		})
		.catch((error) => console.log("ERROR", error));
}
