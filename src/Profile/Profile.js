import React from "react";
import { Query } from "react-apollo";

// import components
import Loading from "../Loading/Loading";
import RepositoryList from "../Repository/RepositoryList";
import ErrorMessage from "../Error/Error";
// import queries / mutations
import { GET_REPOSITORIES_OF_CURRENT_USER } from "../gql-types";

const Profile = () => (
	<Query
		query={GET_REPOSITORIES_OF_CURRENT_USER}
		notifyOnNetworkStatusChange={true}>
		{({ data, loading, error, fetchMore }) => {
			if (error) return <ErrorMessage error={error} />;

			const { viewer } = data;
			if (loading && !viewer) return <Loading />;

			return (
				<RepositoryList
					loading={loading}
					repositories={viewer.repositories}
					fetchMore={fetchMore}
				/>
			);
		}}
	</Query>
);

export default Profile;
