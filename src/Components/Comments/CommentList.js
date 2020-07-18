import React from "react";

// import styles
import "./Comments.css";
// import components
import CommentItem from "./CommentItem";
import FetchMore from "../FetchMore/FetchMore";
import AddComment from "./AddComment";

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
		<div className="CommentList">
			{/* check if comments exist */}
			{!comments.edges.length ? (
				// return 'no comments' if no edges returned from query
				<header className="CommentList-header">No Comments...</header>
			) : (
				<>
					<header className="CommentList-header">Comments</header>
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
		</div>
	);
};

export default CommentList;
