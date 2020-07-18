import React, { useState } from "react";
import { Mutation } from "react-apollo";

// import components
import Error from "../Error/Error";
import Button from "../Button/Button";
// import queries / mutations / etc
import { ADD_COMMENT } from "../../gql-types";
// // import fragments
import { ISSUE_FRAG_for_ADD_COMMENT } from "../../gql-fragments";

const AddComment = ({ issue, viewer }) => {
	const [commentText, setCommentText] = useState("");

	const onChange = (event) => setCommentText(event.target.value);
	const onSubmit = (event, addComment) => {
		event.preventDefault();
		addComment();
		setCommentText("");
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
			fragment: ISSUE_FRAG_for_ADD_COMMENT,
		});

		data.comments.edges.push(commentEdge);

		client.writeFragment({
			id: `Issue:${issue.id}`,
			fragment: ISSUE_FRAG_for_ADD_COMMENT,
			data,
		});
	};

	return (
		<Mutation
			mutation={ADD_COMMENT}
			// commentText from local state above
			variables={{ issueId: issue.id, commentText }}
			update={updateComments}
			optimisticResponse={{
				addComment: {
					__typename: "Mutation",
					commentEdge: {
						__typename: "IssueCommentEdge",
						node: {
							__typename: "IssueComment",
							id: issue.id,
							author: {
								__typename: "Actor",
								login: viewer.login,
							},
							body: commentText,
						},
					},
				},
			}}
		>
			{(addComment, { data, loading, error }) => (
				<div className="AddComment">
					{error && <Error error={error} />}

					<form onSubmit={(event) => onSubmit(event, addComment)}>
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
