// ! deprecated - wanted to set up GitHub API access, using Ouath, to organizations other than my own.  Unfortunately, most orgs restrict 3rd party Oauth access without confirmation.  Had to revert back to using a personal access token, which allows free browsing, but does not allow users to post on issues outside their own repos

import jwt from "jsonwebtoken";
// import utils
import getAccesToken from "./utils/getAccessToken";
import getUser from "./utils/getUser";
import createCookie from "./utils/createCookie";

exports.handler = async (event, context) => {
	// * get code and get referer (from previous oauth login)
	const { code, state } = event.queryStringParameters;
	const { referer, host } = event.headers;
	// console.log("event.queryStringParameters:", event.queryStringParameters); // ? debug
	// console.log("event.headers:", event.headers); // ? debug

	try {
		// * run auth checks
		if (!code) {
			throw new Error(
				"Code parameter missing.  Something went wrong with authorization.  Go back and try again.",
			);
		}
		jwt.verify(state, process.env.REACT_APP_JWT_SECRET, (error, decoded) => {
			if (error)
				throw new Error(
					"Invalid auth state parameter.  Something went wrong with authorization.  Go back and try again.",
				);
		});

		// * get tokens and user info
		const access_token = await getAccesToken(code);
		const user = await getUser(access_token);

		// * create cookies
		const access_cookie = await createCookie(
			"access_token",
			access_token,
			true,
		);
		const user_cookie = await createCookie("user", user, false);

		// redirect back to referer
		// return accessCookie back to appliaction for future requests
		return {
			statusCode: 302,
			headers: {
				"Set-Cookie": [access_cookie, user_cookie],
				"Cache-Control": "no-cache",
				"Content-Type": "application/json",
				Location: referer || host,
			},
		};
	} catch (err) {
		console.error("Error getting access token:", err.message);
		return {
			statusCode: err.statusCode || 500,
			body: JSON.stringify({
				error: err.message,
			}),
		};
	}
};
