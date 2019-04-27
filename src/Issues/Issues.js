import React, { useState } from "react";
import { Query } from "react-apollo";

// import components
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import IssueList from "./IssueList";
import ButtonUnobtrusive from "../Button/Button";
// import queries / mutations / etc
import { GET_ISSUES_OF_REPOSITORY } from "../gql-types";
// import constants
import { ISSUE_STATES, ISSUE_STATE_LABEL } from "../constants";

const Issues = ({ repositoryName, repositoryOwner }) => {
	const issueStates = [
		ISSUE_STATES.NONE,
		ISSUE_STATES.OPEN,
		ISSUE_STATES.CLOSED,
	];
	const [issueIndex, setIssueIndex] = useState(0);
	const issueState = issueStates[issueIndex];

	const changeIssueState = () => {
		setIssueIndex(issueIndex === issueStates.length - 1 ? 0 : issueIndex + 1);
	};
	const showIssues = issueState => issueState !== ISSUE_STATES.NONE;

	return (
		<div className="Issues">
			<ButtonUnobtrusive onClick={() => changeIssueState()}>
				{ISSUE_STATE_LABEL[issueState]}
			</ButtonUnobtrusive>

			{showIssues(issueState) && (
				<Query
					query={GET_ISSUES_OF_REPOSITORY}
					variables={{ repositoryName, repositoryOwner }}>
					{({ data, loading, error }) => {
						if (error) return <Error error={error} />;

						const { repository } = data;
						// return loading indicator
						if (loading && !repository) return <Loading />;
						// filter repo issues based on issueState
						const filteredRepository = {
							issues: {
								edges: repository.issues.edges.filter(
									issue => issue.node.state === issueState,
								),
							},
						};
						// return 'no issues' if no edges returned from query
						if (!filteredRepository.issues.edges.length)
							return <div className="IssueList">No Issues...</div>;
						// return filtered issues
						return <IssueList issues={filteredRepository.issues} />;
					}}
				</Query>
			)}
		</div>
	);
};

export default Issues;
