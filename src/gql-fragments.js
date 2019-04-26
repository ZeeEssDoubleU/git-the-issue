import gql from "graphql-tag";

export const REPO_FRAG = gql`
	fragment repositoryData on Repository {
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
