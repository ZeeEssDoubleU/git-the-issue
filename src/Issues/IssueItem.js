import React, { useState } from "react";
import { ApolloConsumer } from "react-apollo";

// import styles
import "./IssueItem.css";
// import components
import Link from "../Link/Link";
import Comments from "../Comments/Comments";
import Button from "../Button/Button";
// import queries / mutations / etc
import { GET_COMMENTS_OF_ISSUE } from "../gql-types";

const IssueItem = ({ issue, repositoryOwner, repositoryName }) => {
	const [showComments, setShowComments] = useState(false);

	const prefetchIssues = client => {
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
		<div className="IssueItem">
			{/* use ApolloConsumer to implicitly call client for prefetching */}
			<ApolloConsumer>
				{client => (
					<Button
						className="showComments-button"
						onClick={() => setShowComments(!showComments)}
						onMouseOver={() => prefetchIssues(client)}
					>
						{showComments ? "-" : "+"}
					</Button>
				)}
			</ApolloConsumer>

			<div className="IssueItem-content">
				<h3>
					<Link href={issue.url}>{issue.title}</Link>
				</h3>
				<span>{`(${issue.state})`}</span>
				<div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
				{showComments && (
					<Comments
						issueNumber={issue.number}
						repositoryName={repositoryName}
						repositoryOwner={repositoryOwner}
					/>
				)}
			</div>
		</div>
	);
};

export default IssueItem;
