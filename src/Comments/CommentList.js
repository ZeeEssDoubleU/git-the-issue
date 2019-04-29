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
	repository,
	repositoryName,
	repositoryOwner,
	number,
}) => {
	const updateQuery = (previousResult, { fetchMoreResult }) => {
		if (!fetchMoreResult) {
			return previousResult;
		}

		console.log("PREVIOUS", previousResult);
		console.log("NEXT", fetchMoreResult);

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
							...previousResult.repository.issue.comments.edges,
							...fetchMoreResult.repository.issue.comments.edges,
						],
					},
				},
			},
		};
	};

	// destructure for use below
	const { comments } = repository.issue;

	return (
		<div className="CommentList">
			{/* check if comments exist */}
			{!comments.edges.length ? (
				// return 'no comments' if no edges returned from query
				<header className="CommentList-header">No Comments...</header>
			) : (
				<>
					<header className="CommentList-header">Comments</header>
					{comments.edges.map(({ node }) => (
						<CommentItem key={node.id} comment={node} />
					))}
					<FetchMore
						loading={loading}
						hasNextPage={comments.pageInfo.hasNextPage}
						variables={{
							repositoryName,
							repositoryOwner,
							number,
							cursor: comments.pageInfo.endCursor,
						}}
						updateQuery={updateQuery}
						fetchMore={fetchMore}
					>
						More Comments
					</FetchMore>
				</>
			)}
			<AddComment issueId={repository.issue.id} />
		</div>
	);
};

export default CommentList;
