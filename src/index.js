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

// import styles
import "./index.css";
// import components
import App from "./Components/App/App";

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

const httpLink = new HttpLink({
	uri: "https://api.github.com/graphql",
	headers: {
		authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
	},
});

const link = ApolloLink.from([errorLink, retryLink, httpLink]);

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
