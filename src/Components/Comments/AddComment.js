import React, { useState } from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
// import components
import Error from "../Error/Error";
import Button from "../Button/Button";
// import styls
import { Grid } from "../../styles/elements";
// import queries / mutations / etc
import { ADD_COMMENT } from "../../gql-types";
// import fragments
import { ISSUE_FRAG_for_ADD_COMMENT } from "../../gql-fragments";

// ********
// component
// ********

export default function AddComment({ issue, viewer }) {
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
				<>
					{error && <Error error={error} />}

					<Form
						as="form"
						onSubmit={(event) => onSubmit(event, addComment)}
					>
						<CommentInput
							value={commentText}
							onChange={onChange}
							placeholder="Leave a comment!"
							rows={5}
						/>
						<CommentButton type="submit">Comment</CommentButton>
					</Form>
				</>
			)}
		</Mutation>
	);
}

// ********
// styles
// ********

const CommentInput = styled.textarea`
	padding: 0.5rem;
	border: black 1px solid;
`;
const CommentButton = styled(Button)`
	justify-self: center;
`;
const Form = styled(Grid)`
	gap: 0.5rem;
`;
