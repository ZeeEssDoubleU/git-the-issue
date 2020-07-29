import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// import Apollo utils
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { RetryLink } from "apollo-link-retry";
import { InMemoryCache } from "apollo-cache-inmemory";
// import components
import App from "./components/App";
// import styles
import "./index.css";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ path, locations, message }) =>
			console.log(
				`[GraphQL Error]: Message ${message}, Location: ${locations}, Path: ${path}`,
			),
		);
	}

	if (networkError) {
		console.log(`[Network Error]: ${networkError}`);
	}
});

const retryLink = new RetryLink({
	delay: {
		initial: 300,
		max: Infinity,
		jitter: true,
	},
	attempts: {
		max: 5,
		retryIf: (error, _operation) => !!error,
	},
});

// ! deprecated - wanted to set up GitHub API access, using Ouath, to organizations other than my own.  Unfortunately, most orgs restrict 3rd party Oauth access without confirmation.  Had to revert back to using a personal access token, which allows free browsing, but does not allow users to post on issues outside their own repos
// const authLink = setContext((_, { headers, ...context }) => {
// 	const token = js_cookie.get("jwt_access");
// 	return {
// 		headers: {
// 			...headers,
// 			...(token ? { Authorization: `bearer ${token}` } : {}),
// 		},
// 		...context,
// 	};
// });

const httpLink = new HttpLink({
	uri: "https://api.github.com/graphql",
	headers: {
		Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
	},
});

// combine links and cache into client
const link = ApolloLink.from([errorLink, retryLink, httpLink]); // ! removed authLink, consider adding back for testing.  See above
const cache = new InMemoryCache();
const client = new ApolloClient({
	link,
	cache,
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
