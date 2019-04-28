import React, { useState } from "react";
import { Mutation } from "react-apollo";

// import components
import Error from "../Error/Error";
import Button from "../Button/Button";
// import queries / mutations / etc
import { ADD_COMMENT } from "../gql-types";

const AddComment = ({ issueId }) => {
	const [commentText, setCommentText] = useState("");

	const onChange = event => setCommentText(event.target.value);
	const onSubmit = (event, addComment) => {
		event.preventDefault();
		addComment().then(() => setCommentText(""));
	};

	return (
		<Mutation mutation={ADD_COMMENT} variables={{ issueId, commentText }}>
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
