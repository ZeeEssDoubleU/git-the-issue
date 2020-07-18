import React, { useLayoutEffect } from "react";
import styled from "styled-components/macro";
// import components
import RepoDetails from "./RepoDetails";
import FetchMore from "../FetchMore/FetchMore";
import Issues from "../Issues/Issues";
// import store / actions
import useStore, { setViewer } from "../../store/useStore";
// import styles
import { Grid } from "../../styles/elements";

// ********
// component
// ********

const RepositoryList = ({
	viewer,
	repositories,
	fetchMore,
	loading,
	entry,
}) => {
	const { dispatch } = useStore();

	useLayoutEffect(() => {
		setViewer(viewer, dispatch);
	}, []);

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
				<RepoItem key={node.id}>
					<RepoDetails {...node} />
					<Issues
						repositoryName={node.name}
						repositoryOwner={node.owner.login}
					/>
				</RepoItem>
			))}

			<RepoItem>
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
			</RepoItem>
		</>
	);
};

export default RepositoryList;

// ********
// styles
// ********

const RepoItem = styled(Grid)`
	padding: 1rem 0.5rem;
	border-bottom: 1px solid black;

	@media (min-width: 720px) {
		padding: ${(props) => props.theme.grid.padding};
	}
`;
