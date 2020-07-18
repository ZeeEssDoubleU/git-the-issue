import React from "react";
import styled from "styled-components/macro";
// import components
import RepositoryItem from "./RepositoryItem";
import FetchMore from "../FetchMore/FetchMore";
import Issues from "../Issues/Issues";
// import styles
import { Grid } from "../../styles/elements";

// ********
// component
// ********

const RepositoryList = ({ repositories, fetchMore, loading, entry }) => {
	const updateQuery = (entry) => (previousResult, { fetchMoreResult }) => {
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
				<Container key={node.id}>
					<RepositoryItem {...node} />
					<Issues
						repositoryName={node.name}
						repositoryOwner={node.owner.login}
					/>
				</Container>
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

// ********
// styles
// ********

const Container = styled(Grid)`
	padding: ${(props) => props.theme.grid.padding};
	border-bottom: 1px solid black;
`;
