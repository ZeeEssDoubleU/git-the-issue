import React from "react";
import styled from "styled-components";
// import styles
import { Grid } from "../../styles/elements";
// import components
import CommentItem from "./CommentItem";
import FetchMore from "../FetchMore/FetchMore";
import AddComment from "./AddComment";

// ********
// component
// ********

const CommentList = ({
	loading,
	fetchMore,
	viewer,
	issue,
	repositoryId,
	repositoryName,
	repositoryOwner,
}) => {
	const updateQuery = (previousResult, { fetchMoreResult }) => {
		if (!fetchMoreResult) {
			return previousResult;
		}

		return {
			...previousResult,
			repository: {
				...previousResult.repository,
				issue: {
					...previousResult.repository.issue,
					...fetchMoreResult.repository.issue,
					comments: {
						...previousResult.repository.issue.comments,
						...fetchMoreResult.repository.issue.comments,
						edges: [
							...fetchMoreResult.repository.issue.comments.edges,
							...previousResult.repository.issue.comments.edges,
						],
					},
				},
			},
		};
	};

	// destructure for use below
	const { comments } = issue;

	return (
		<CommentsContent>
			{/* check if comments exist */}
			{!comments.edges.length ? (
				// return 'no comments' if no edges returned from query
				<Header>No Comments...</Header>
			) : (
				<>
					<Header>Comments</Header>
					<FetchMore
						loading={loading}
						hasNextPage={comments.pageInfo.hasPreviousPage}
						variables={{
							repositoryName,
							repositoryOwner,
							number: issue.number,
							cursor: comments.pageInfo.startCursor,
						}}
						updateQuery={updateQuery}
						fetchMore={fetchMore}
					>
						Previous Comments
					</FetchMore>
					{comments.edges.map(({ node }) => (
						<CommentItem key={node.id} comment={node} />
					))}
				</>
			)}
			<AddComment
				issue={issue}
				repositoryId={repositoryId}
				repositoryName={repositoryName}
				repositoryOwner={repositoryOwner}
				viewer={viewer}
			/>
		</CommentsContent>
	);
};

export default CommentList;

// ********
// styles
// ********

const CommentsContent = styled(Grid)`
	gap: 0.5rem;
	padding: 0 0 0.5rem 0.5rem;
`;
const Header = styled.header`
	font-style: italic;
`;
