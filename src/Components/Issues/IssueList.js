import React from "react";
// import components
import IssueItem from "./IssueItem";
import FetchMore from "../FetchMore/FetchMore";
// import styles
import { Grid } from "../../styles/elements";

// ********
// component
// ********

const IssueList = ({
	issues,
	loading,
	repositoryOwner,
	repositoryName,
	issueState,
	fetchMore,
}) => {
	const updateQuery = (previousResult, { fetchMoreResult }) => {
		if (!fetchMoreResult) {
			return previousResult;
		}

		return {
			...previousResult,
			repository: {
				...previousResult.repository,
				issues: {
					...previousResult.repository.issues,
					...fetchMoreResult.repository.issues,
					edges: [
						...previousResult.repository.issues.edges,
						...fetchMoreResult.repository.issues.edges,
					],
				},
			},
		};
	};

	return (
		<Grid>
			{issues.edges.map(({ node }) => (
				<IssueItem
					key={node.id}
					issue={node}
					repositoryName={repositoryName}
					repositoryOwner={repositoryOwner}
				/>
			))}

			<FetchMore
				loading={loading}
				hasNextPage={issues.pageInfo.hasNextPage}
				variables={{
					cursor: issues.pageInfo.endCursor,
					repositoryOwner,
					repositoryName,
					issueState,
				}}
				updateQuery={updateQuery}
				fetchMore={fetchMore}
			>
				More Issues
			</FetchMore>
		</Grid>
	);
};

export default IssueList;

// ********
// styles
// ********
