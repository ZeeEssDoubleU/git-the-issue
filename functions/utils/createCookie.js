import cookie from "cookie";
import jwt from "jsonwebtoken";

export default async function createCookie(name, value, httpOnly) {
	try {
		// * create JWT and set expiresIn
		const expiresIn = 7 * 24 * 60 * 60; // 1 week
		const encoded = await jwt.sign(
			{ value },
			process.env.REACT_APP_JWT_SECRET,
			{ expiresIn },
		);

		// store JWT in cookie
		const jwt_cookie = cookie.serialize(name, encoded, {
			secure: process.env.NETLIFY_DEV !== "true",
			httpOnly: httpOnly,
			path:
				process.env.NETLIFY_DEV !== "true"
					? process.env.REACT_APP_PROD_URL
					: "/",
			maxAge: expiresIn,
		});

		return jwt_cookie;
	} catch (err) {
		console.error("Error creating cookie:", err.message);
		return {
			statusCode: err.statusCode || 500,
			body: JSON.stringify({
				error: err.message,
			}),
		};
	}
}
