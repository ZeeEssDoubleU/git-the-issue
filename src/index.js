import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// import Apollo utils
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// import styles
import "./index.css";
// import components
import App from "./App/App";

const httpLink = new HttpLink({
	uri: "https://api.github.com/graphql",
	headers: {
		authorization: `bearer ${
			process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
		}`,
	},
});

const cache = new InMemoryCache();
const client = new ApolloClient({
	link: httpLink,
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
