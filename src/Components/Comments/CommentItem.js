import React from "react";
import styled from "styled-components";
// import styles
import { Grid } from "../../styles/elements";

// ********
// component
// ********

const CommentItem = ({ comment }) => {
	return (
		<Item>
			<div>@{comment.author.login}</div>
			<Pre>{comment.body}</Pre>
		</Item>
	);
};

export default CommentItem;

// ********
// styles
// ********

const Item = styled(Grid)`
	border-top: 1px solid black;
	border-left: 1px solid black;
	padding: 0.5rem 0 0 0.5rem;
`;
const Pre = styled.pre`
	white-space: pre-wrap;
`;
