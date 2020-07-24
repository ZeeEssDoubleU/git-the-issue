import axios from "axios";

export default async function getAccessToken(code) {
	try {
		// * exchange code for access token
		const response = await axios({
			method: "POST",
			url: `${process.env.REACT_APP_OAUTH_URL}/access_token`,
			headers: { Accept: "application/json" },
			data: {
				client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
				client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
				code,
			},
		});

		// console.log("response:", response.data); // ? debug
		const { access_token } = response.data;

		return access_token;
	} catch (err) {
		console.error("Error getting access token:", err.message);
		return {
			statusCode: err.statusCode || 500,
			body: JSON.stringify({
				error: err.message,
			}),
		};
	}
}
