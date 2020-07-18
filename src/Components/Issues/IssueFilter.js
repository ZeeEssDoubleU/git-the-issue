import React from "react";
import { ApolloConsumer } from "react-apollo";
// import components
import { ButtonMinimal } from "../Button/Button";
import { ISSUE_STATE_LABEL } from "../../constants";
import { GET_ISSUES_OF_REPOSITORY } from "../../gql-types";

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

	const prefetchIssues = (client) => {
		// prefetch the issueFilter-button's NEXT issueState
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
		// use consumer to implicitly call client for prefetching
		<ApolloConsumer>
			{(client) => (
				<ButtonMinimal
					onClick={() => changeIssueState()}
					onMouseOver={() => prefetchIssues(client)}
				>
					{ISSUE_STATE_LABEL[issueState]}
				</ButtonMinimal>
			)}
		</ApolloConsumer>
	);
};

export default IssueFilter;
