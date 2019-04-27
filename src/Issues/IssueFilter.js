import React from "react";
import { ApolloConsumer } from "react-apollo";

// import components
import ButtonUnobtrusive from "../Button/Button";
import { ISSUE_STATE_LABEL } from "../constants";
import { GET_ISSUES_OF_REPOSITORY } from "../gql-types";

const IssueFilter = ({
	repositoryOwner,
	repositoryName,
	changeIssueState,
	issueStates,
	issueIndex,
	issueState,
	showIssues,
}) => {
	const nextIssueState =
		issueStates[issueIndex === issueStates.length - 1 ? 0 : issueIndex + 1];

	const prefetchIssues = (client, repositoryOwner, repositoryName) => {
		if (showIssues(nextIssueState)) {
			client.query({
				query: GET_ISSUES_OF_REPOSITORY,
				variables: {
					repositoryOwner,
					repositoryName,
					issueState: nextIssueState,
				},
			});
		}
	};
	return (
		<ApolloConsumer>
			{client => (
				<ButtonUnobtrusive
					onClick={() => changeIssueState()}
					onMouseOver={() =>
						prefetchIssues(client, repositoryOwner, repositoryName)
					}>
					{ISSUE_STATE_LABEL[issueState]}
				</ButtonUnobtrusive>
			)}
		</ApolloConsumer>
	);
};

export default IssueFilter;
