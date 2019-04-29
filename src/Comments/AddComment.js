import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

// import components
import Error from "../Error/Error";
import Button from "../Button/Button";
// import queries / mutations / etc
import { ADD_COMMENT, GET_COMMENTS_OF_ISSUE } from "../gql-types";
// // import fragments
import { ISSUE_FRAG } from "../gql-fragments";

const AddComment = ({ issue, repositoryName, repositoryOwner, viewer }) => {
	const [commentText, setCommentText] = useState("");

	const onChange = event => setCommentText(event.target.value);
	const onSubmit = (event, addComment) => {
		event.preventDefault();
		addComment().then(() => setCommentText(""));
	};

	const updateComments = (
		client,
		{
			data: {
				addComment: { commentEdge },
			},
		},
	) => {
		const data = client.readFragment({
			id: `Issue:${issue.id}`,
			fragment: ISSUE_FRAG,
		});

		data.comments.edges.push(commentEdge);

		console.log("ISSUE ISSUE ISSUE", data);

		client.writeFragment({
			id: `Issue:${issue.id}`,
			fragment: ISSUE_FRAG,
			data,
		});
	};

	return (
		<Mutation
			mutation={ADD_COMMENT}
			// commentText from local state above
			variables={{ issueId: issue.id, commentText }}
			// update={updateComments}
			refetchQueries={() => {
				return [
					{
						query: GET_COMMENTS_OF_ISSUE,
						variables: {
							repositoryName,
							repositoryOwner,
							number: issue.number,
						},
					},
				];
			}}
		>
			{(addComment, { data, loading, error }) => (
				<div className="AddComment">
					{error && <Error error={error} />}

					<form onSubmit={event => onSubmit(event, addComment)}>
						<textarea
							value={commentText}
							onChange={onChange}
							placeholder="Leave a comment!"
							rows={5}
						/>
						<Button type="submit">Comment</Button>
					</form>
				</div>
			)}
		</Mutation>
	);
};

export default AddComment;
