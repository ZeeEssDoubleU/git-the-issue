import React from "react";

// import styles
import "./Comments.css";

const CommentItem = ({ comment }) => {
	return (
		<div className="CommentItem">
			<div>{comment.author.login}</div>
			<br />
			<div dangerouslySetInnerHTML={{ __html: comment.bodyHTML }} />
		</div>
	);
};

export default CommentItem;
