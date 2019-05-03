import gql from "graphql-tag";

export const REPO_FRAG = gql`
	fragment repoData on Repository {
		id
		name
		url
		description
		primaryLanguage {
			name
		}
		owner {
			login
			url
		}
		stargazers {
			totalCount
		}
		viewerHasStarred
		watchers {
			totalCount
		}
		viewerSubscription
	}
`;

export const ISSUE_FRAG_for_GET_ISSUES_OF_REPO = gql`
	fragment issueData_GetIssues on Issue {
		id
		number
		state
		title
		url
		body
	}
`;

export const ISSUE_FRAG_for_GET_COMMENTS_OF_ISSUE = gql`
	fragment issueData_GetComments on Issue {
		id
		number
		comments(last: 5, before: $cursor) @connection(key: "comments") {
			edges {
				node {
					id
					body
					author {
						login
					}
				}
			}
			pageInfo {
				startCursor
				hasPreviousPage
			}
		}
	}
`;

export const ISSUE_FRAG_for_ADD_COMMENT = gql`
	fragment issueData_AddComment on Issue {
		id
		comments(last: 1) @connection(key: "comments") {
			edges {
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
