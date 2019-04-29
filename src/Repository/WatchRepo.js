import React from "react";
import { Mutation } from "react-apollo";

// import components
import Button from "../Button/Button";
// import queries / mutations / etc
import { WATCH_REPO } from "../gql-types";
import { REPO_FRAG } from "../gql-fragments";

const WatchRepo = ({ id, watchers, viewerSubscription }) => {
   // function to update Apollo cache.  Covers gaps in GraphQL's return values.  UI updates once cache updates
	const updateWatchers = (
		client,
		{
			data: {
				updateSubscription: {
					subscribable: { id, viewerSubscription },
				},
			},
		},
	) => {
		const repository = client.readFragment({
			id: `Repository:${id}`,
			fragment: REPO_FRAG,
		});

		const totalCount =
			viewerSubscription === "SUBSCRIBED"
				? repository.watchers.totalCount + 1
				: repository.watchers.totalCount - 1;

		client.writeFragment({
			id: `Repository:${id}`,
			fragment: REPO_FRAG,
			data: {
				...repository,
				watchers: {
					...repository.watchers,
					totalCount,
				},
			},
		});
	};

	return (
		<Mutation
			mutation={WATCH_REPO}
			variables={{
				id,
				newWatchState:
					viewerSubscription === "SUBSCRIBED"
						? "UNSUBSCRIBED"
						: "SUBSCRIBED",
			}}
			optimisticResponse={{
				updateSubscription: {
					__typename: "Mutation",
					subscribable: {
						__typename: "Repository",
						id,
						viewerSubscription:
							viewerSubscription === "SUBSCRIBED"
								? "UNSUBSCRIBED"
								: "SUBSCRIBED",
					},
				},
			}}
			update={updateWatchers}
		>
			{(updateSubscription, { data, loading, error }) => (
				<Button
					className="RepositoryItem-title-action"
					onClick={updateSubscription}
				>
					{watchers.totalCount}
					{" Watchers "}
					{viewerSubscription === "SUBSCRIBED" ? "(Unwatch)" : "(Watch)"}
				</Button>
			)}
		</Mutation>
	);
};

export default WatchRepo;
