import React from "react";

// import styles
import "./Comments.css";

const CommentItem = ({ comment }) => {
	return (
		<div className="CommentItem">
			<div>{comment.author.login}</div>
			<br />
			<p>{comment.body}</p>
		</div>
	);
};

export default CommentItem;
