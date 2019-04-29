import gql from "graphql-tag";

// import fragments
import { REPO_FRAG, ISSUE_FRAG, COMMENT_FRAG } from "./gql-fragments";

// ***************
// queries
// ***************
export const GET_REPOSITORIES_OF_CURRENT_USER = gql`
	query($cursor: String) {
		viewer {
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
			issues(first: 5, states: [$issueState], after: $cursor) {
				edges {
					node {
						...issueData
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
	}
	${ISSUE_FRAG}
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
				id
				number
				comments(first: 5, after: $cursor) {
					edges {
						node {
							...commentData
						}
					}
					pageInfo {
						endCursor
						hasNextPage
					}
				}
			}
		}
	}
	${COMMENT_FRAG}
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
					bodyHTML
				}
			}
		}
	}
`;
