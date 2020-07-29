import React from "react";
import { Query } from "react-apollo";
// import components
import Loading from "./Loading";
import RepoList from "./Repository/RepoList";
import Error from "./Error";
// import queries / mutations
import { GET_REPOSITORIES_OF_CURRENT_USER } from "../gql-types";

const Profile = () => (
	<Query
		query={GET_REPOSITORIES_OF_CURRENT_USER}
		notifyOnNetworkStatusChange={true}
	>
		{({ data, loading, error, fetchMore }) => {
			if (error) return <Error error={error} />;

			const { viewer } = data;
			if (loading && !viewer) return <Loading />;

			return (
				<RepoList
					loading={loading}
					viewer={viewer.login}
					repositories={viewer.repositories}
					fetchMore={fetchMore}
					entry="viewer"
				/>
			);
		}}
	</Query>
);

export default Profile;
