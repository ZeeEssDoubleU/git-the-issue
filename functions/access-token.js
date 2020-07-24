// ! deprecated - wanted to set up GitHub API access, using Ouath, to organizations other than my own.  Unfortunately, most orgs restrict 3rd party Oauth access without confirmation.  Had to revert back to using a personal access token, which allows free browsing, but does not allow users to post on issues outside their own repos

import cookie from "cookie";
import jwt from "jsonwebtoken";

exports.handler = async (event, context) => {
	// console.log("event.headers:", event.headers); // ? debug

	try {
		const { access_token } = await cookie.parse(event.headers.cookie);
		// console.log("access_token:", access_token); // ? debug

		const decoded = await jwt.verify(
			access_token,
			process.env.REACT_APP_JWT_SECRET,
		);
		// console.log("decoded:", decoded); // ? debug

		// * check if token expired
		const currentTime = Date.now() / 1000;
		if (currentTime >= decoded.exp) {
			// TODO: destroy cookies if expired

			return {
				statusCode: 200,
				body: JSON.stringify("Access token expired.  Please login again."),
			};
		} else {
			return {
				statusCode: 200,
				body: JSON.stringify(decoded),
			};
		}
	} catch (err) {
		console.error("Error retrieving access token:", err.message);
		return {
			statusCode: err.statusCode || 500,
			body: JSON.stringify({
				error: err.message,
			}),
		};
	}
};
