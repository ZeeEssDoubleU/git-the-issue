import React from "react";

// import styles
import "./Comments.css";
// import components
import CommentItem from "./CommentItem";
import FetchMore from "../FetchMore/FetchMore";

const CommentList = ({
	comments,
	loading,
	fetchMore,
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

	return (
		<div className="CommentList">
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
		</div>
	);
};

export default CommentList;
