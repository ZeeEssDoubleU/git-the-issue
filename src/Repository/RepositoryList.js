import React from "react";

// import styles
import "./Repository.css";
// import components
import RepositoryItem from "./RepositoryItem";
import FetchMore from "../FetchMore/FetchMore";

const RepositoryList = ({ repositories, fetchMore, loading }) => {
	const updateQuery = (previousResult, { fetchMoreResult }) => {
		if (!fetchMoreResult) {
			return previousResult;
		}

		return {
			...previousResult,
			viewer: {
				...previousResult.viewer,
				repositories: {
					...previousResult.viewer.repositories,
					...fetchMoreResult.viewer.repositories,
					edges: [
						...previousResult.viewer.repositories.edges,
						...fetchMoreResult.viewer.repositories.edges,
					],
				},
			},
		};
	};
	return (
		<>
			{repositories.edges.map(({ node }) => (
				<div key={node.id} className="RepositoryItem">
					<RepositoryItem {...node} />
				</div>
			))}

			<FetchMore
				loading={loading}
				hasNextPage={repositories.pageInfo.hasNextPage}
				variables={{
					cursor: repositories.pageInfo.endCursor,
				}}
				updateQuery={updateQuery}
				fetchMore={fetchMore}>
				Repositories
			</FetchMore>
		</>
	);
};

export default RepositoryList;
