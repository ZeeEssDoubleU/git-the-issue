import gql from "graphql-tag";

export const REPO_FRAG = gql`
	fragment repoData on Repository {
		id
		name
		url
		descriptionHTML
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

export const COMMENT_FRAG = gql`
	fragment commentData on Comment {
		id
		bodyHTML
		author {
			login
		}
	}
`;

export const ISSUE_FRAG = gql`
	fragment issueData on Issue {
		id
		number
		state
		title
		url
		bodyHTML
		comments(last: 3) {
			edges {
				node {
					id
					bodyHTML
					author {
						login
					}
				}
			}
		}
	}
`;
