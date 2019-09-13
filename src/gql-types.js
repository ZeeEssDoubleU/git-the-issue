import gql from "graphql-tag";

// import fragments
import {
	REPO_FRAG,
	ISSUE_FRAG_for_GET_ISSUES_OF_REPO,
	ISSUE_FRAG_for_GET_COMMENTS_OF_ISSUE,
} from "./gql-fragments";

// ***************
// queries
// ***************
export const GET_REPOSITORIES_OF_CURRENT_USER = gql`
	query($cursor: String) {
		viewer {
			login
			repositories(
				first: 5
				orderBy: { direction: DESC, field: STARGAZERS }
				after: $cursor
			) {
				edges {
					node {
						...repoData
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
	}

	${REPO_FRAG}
`;

export const GET_REPOSITORIES_OF_ORGANIZATION = gql`
	query($organizationName: String!, $cursor: String) {
		organization(login: $organizationName) {
			repositories(first: 5, after: $cursor) {
				edges {
					node {
						...repoData
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
	}
	${REPO_FRAG}
`;

export const GET_ISSUES_OF_REPOSITORY = gql`
	query(
		$repositoryOwner: String!
		$repositoryName: String!
		$issueState: IssueState!
		$cursor: String
	) {
		repository(name: $repositoryName, owner: $repositoryOwner) {
			issues(first: 5, states: [$issueState], before: $cursor) {
				edges {
					node {
						...issueData_GetIssues
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
	}
	${ISSUE_FRAG_for_GET_ISSUES_OF_REPO}
`;

export const GET_COMMENTS_OF_ISSUE = gql`
	query(
		$repositoryOwner: String!
		$repositoryName: String!
		$number: Int!
		$cursor: String
	) {
		viewer {
			id
			login
		}
		repository(name: $repositoryName, owner: $repositoryOwner) {
			name
			owner {
				login
			}
			issue(number: $number) {
				...issueData_GetComments
			}
		}
	}
	${ISSUE_FRAG_for_GET_COMMENTS_OF_ISSUE}
`;

// ***************
// mutations
// ***************
export const STAR_REPO = gql`
	mutation($id: ID!) {
		addStar(input: { starrableId: $id }) {
			starrable {
				id
				viewerHasStarred
				stargazers {
					totalCount
				}
			}
		}
	}
`;
export const UNSTAR_REPO = gql`
	mutation($id: ID!) {
		removeStar(input: { starrableId: $id }) {
			starrable {
				id
				viewerHasStarred
				stargazers {
					totalCount
				}
			}
		}
	}
`;

export const WATCH_REPO = gql`
	mutation($id: ID!, $newWatchState: SubscriptionState!) {
		updateSubscription(
			input: { state: $newWatchState, subscribableId: $id }
		) {
			subscribable {
				id
				viewerSubscription
			}
		}
	}
`;

export const ADD_COMMENT = gql`
	mutation($issueId: ID!, $commentText: String!) {
		addComment(input: { subjectId: $issueId, body: $commentText }) {
			commentEdge {
				node {
					id
					author {
						login
					}
					body
				}
			}
		}
	}
`;
