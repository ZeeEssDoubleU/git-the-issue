export const ROUTES = {
	PROFILE: "/profile",
	ORG: "/",
};

export const ISSUE_STATES = {
	NONE: "NONE",
	OPEN: "OPEN",
	CLOSED: "CLOSED",
};

export const ISSUE_STATE_LABEL = {
	[ISSUE_STATES.NONE]: "Show Open Issues",
	[ISSUE_STATES.OPEN]: "Show Closed Issues",
	[ISSUE_STATES.CLOSED]: "Hide Issues",
};
