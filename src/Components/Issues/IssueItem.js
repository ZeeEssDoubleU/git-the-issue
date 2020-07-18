import React, { useState } from "react";
import { ApolloConsumer } from "react-apollo";
import styled from "styled-components";
// import components
import Link from "../Link/Link";
import Comments from "../Comments/Comments";
import Button from "../Button/Button";
// import styles
import { Grid } from "../../styles/elements";
// import queries / mutations / etc
import { GET_COMMENTS_OF_ISSUE } from "../../gql-types";

// ********
// component
// ********

export default function IssueItem({ issue, repositoryOwner, repositoryName }) {
	const [showComments, setShowComments] = useState(false);

	const prefetchIssues = (client) => {
		// prefetch the showComments-button's opposite state
		if (!showComments) {
			client.query({
				query: GET_COMMENTS_OF_ISSUE,
				variables: {
					repositoryName,
					repositoryOwner,
					number: issue.number,
				},
			});
		}
	};

	return (
		<IssueItemGrid>
			{/* use ApolloConsumer to implicitly call client for prefetching */}
			<ApolloConsumer>
				{(client) => (
					<StyledButton
						onClick={() => setShowComments(!showComments)}
						onMouseOver={() => prefetchIssues(client)}
					>
						{showComments ? "-" : "+"}
					</StyledButton>
				)}
			</ApolloConsumer>

			<IssueContent showComments={showComments}>
				<IssueDetails showComments={showComments}>
					<Header>
						<Title>
							<Link href={issue.url}>{issue.title}</Link>
						</Title>
						<span>{`(${issue.state})`}</span>
					</Header>
					<div>@{issue.author.login}</div>
					<Pre>{issue.body}</Pre>
				</IssueDetails>
				{showComments && (
					<Comments
						issueNumber={issue.number}
						repositoryName={repositoryName}
						repositoryOwner={repositoryOwner}
					/>
				)}
			</IssueContent>
		</IssueItemGrid>
	);
}

// ********
// styles
// ********

const Header = styled.div`
	align-items: center;
	align-content: center;
	align-self: center;
`;
const IssueItemGrid = styled(Grid)`
	grid-template-columns: auto 1fr;
	gap: 0;
`;
const IssueContent = styled(Grid)`
	gap: 0.5rem;
	border-left: 1px solid black;
	border-bottom: 1px solid black;
`;
const IssueDetails = styled(Grid)`
	gap: 0.5rem;
	padding: 0 0 0.5rem 0.5rem;
	border-bottom: ${(props) =>
		props.showComments === true ? "1px solid black" : "none"};
`;
const Pre = styled.pre`
	white-space: pre-wrap;
	min-width: 8rem;
	font-size: 12px;
	@media (min-width: 480px) {
		font-size: 16px;
	}
`;
const StyledButton = styled(Button)`
	height: 30px;
	width: 30px;
	padding: 0;
	border-right: none;
`;
const Title = styled.h3`
	@media (max-width: 480px) {
		font-size: 16px;
	}
`;
