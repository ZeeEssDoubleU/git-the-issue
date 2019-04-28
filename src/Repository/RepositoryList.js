import React from "react";

// import styles
import "./Repository.css";
// import components
import RepositoryItem from "./RepositoryItem";
import FetchMore from "../FetchMore/FetchMore";
import Issues from "../Issues/Issues";

const RepositoryList = ({ repositories, fetchMore, loading, entry }) => {
	const updateQuery = entry => (previousResult, { fetchMoreResult }) => {
		if (!fetchMoreResult) {
			return previousResult;
		}

		return {
			...previousResult,
			[entry]: {
				...previousResult[entry],
				repositories: {
					...previousResult[entry].repositories,
					...fetchMoreResult[entry].repositories,
					edges: [
						...previousResult[entry].repositories.edges,
						...fetchMoreResult[entry].repositories.edges,
					],
				},
			},
		};
	};

	// render section
	return (
		<>
			{repositories.edges.map(({ node }) => (
				<div key={node.id} className="RepositoryItem">
					<RepositoryItem {...node} />
					<Issues
						repositoryName={node.name}
						repositoryOwner={node.owner.login}
					/>
				</div>
			))}

			<FetchMore
				loading={loading}
				hasNextPage={repositories.pageInfo.hasNextPage}
				variables={{
					cursor: repositories.pageInfo.endCursor,
				}}
				updateQuery={updateQuery(entry)}
				fetchMore={fetchMore}
			>
				More Repositories
			</FetchMore>
		</>
	);
};

export default RepositoryList;
