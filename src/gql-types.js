import gql from "graphql-tag";

// import fragments
import { REPO_FRAG } from "./gql-fragments";

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
						...repositoryData
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
						...repositoryData
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
	query($repositoryOwner: String!, $repositoryName: String!) {
		repository(name: $repositoryName, owner: $repositoryOwner) {
			issues(first: 5) {
				edges {
					node {
						id
						number
						state
						title
						url
						bodyHTML
					}
				}
			}
		}
	}
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
