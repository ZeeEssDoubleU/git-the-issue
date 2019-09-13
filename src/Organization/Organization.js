import React from "react";
import { Query } from "react-apollo";

// import style
import './Organization.css'

// import components
import Loading from "../Loading/Loading";

// import queries / mutations / fragments
import { GET_REPOSITORIES_OF_ORGANIZATION } from "../gql-types";
import Error from "../Error/Error";
import RepositoryList from "../Repository/RepositoryList";

const Organization = ({ organizationName }) => (
	<Query
		query={GET_REPOSITORIES_OF_ORGANIZATION}
		variables={{ organizationName }}
		skip={organizationName === ""}
		notifyOnNetworkStatusChange={true}
	>
		{({ data, loading, error, fetchMore }) => {
			if (error) return <Error error={error} />;

			const { organization } = data;
			if (loading && !organization) return <Loading />;

			return (
				<>
					<h1 className="org-header">{organizationName}</h1>
					<RepositoryList
						loading={loading}
						repositories={organization.repositories}
						fetchMore={fetchMore}
						entry="organization"
					/>
				</>
			);
		}}
	</Query>
);

export default Organization;
