// ! deprecated - wanted to set up GitHub API access, using Ouath, to organizations other than my own.  Unfortunately, most orgs restrict 3rd party Oauth access without confirmation.  Had to revert back to using a personal access token, which allows free browsing, but does not allow users to post on issues outside their own repos

import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

// oauth redirect to github login
exports.handler = async (event, context) => {
	// set oauth url
	const domain = process.env.REACT_APP_OAUTH_URL;
	const params = {
		client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
		scope:
			"public_repo read:packages notifications read:user user:follow read:discussion",
		state: jwt.sign({ check: uuidv4() }, process.env.REACT_APP_JWT_SECRET, {
			expiresIn: 60,
		}),
		redirect_uri: `${process.env.REACT_APP_DEV_URL}/api/auth-callback`,
	};
	const url = `${domain}/authorize?${new URLSearchParams(params)}`;

	try {
		// redirect to github login
		return {
			statusCode: 302,
			headers: {
				"Cache-Control": "no-cache",
				Location: url,
			},
		};
	} catch (err) {
		console.error("Error redirecting to oauth server:", err.message);
		return {
			statusCode: err.statusCode || 500,
			body: JSON.stringify({
				error: err.message,
			}),
		};
	}
};
