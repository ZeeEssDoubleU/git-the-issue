import axios from "axios";

export default async function getUser(access_token) {
	try {
		// * get user info
		const response = await axios({
			method: "GET",
			url: `https://api.github.com/user`,
			headers: {
				Accept: "application/json",
				Authorization: `bearer ${access_token}`,
			},
		});
		// console.log("response:", response.data); // ? debug

		const { login, email } = response.data;
		const user = { login, email };
		// console.log("user:", user); // ? debug

		return user;
	} catch (err) {
		console.error("Error getting user data:", err.message);
		return {
			statusCode: err.statusCode || 500,
			body: JSON.stringify({
				error: err.message,
			}),
		};
	}
}
