import React from "react";
import { Mutation } from "react-apollo";

// import styles
import "./Repository.css";
//import components
import Link from "../Link/Link";
import Button from "../Button/Button";
// import queries / mutations / fragments
import { STAR_REPO, UNSTAR_REPO, WATCH_REPO } from "../gql-types";
import { REPO_FRAG } from "../gql-fragments";

const RepositoryItem = ({
	id,
	name,
	url,
	descriptionHTML,
	primaryLanguage,
	owner,
	stargazers,
	watchers,
	viewerSubscription,
	viewerHasStarred,
}) => {
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
		<div>
			<div className="RepositoryItem-title">
				<h2>
					<Link href={url}>{name}</Link>
				</h2>

				<div className="RepositoryItem-title-action">
					{!viewerHasStarred ? (
						<Mutation
							mutation={STAR_REPO}
							variables={{ id }}
							optimisticResponse={{
								addStar: {
									__typename: "Mutation",
									starrable: {
										__typename: "Repository",
										id,
										viewerHasStarred: !viewerHasStarred,
										stargazers: {
											__typename: "StargazerConnection",
											totalCount: stargazers.totalCount + 1,
										},
									},
								},
							}}>
							{addStar => (
								<Button
									className="RepositoryItem-title-action"
									onClick={addStar}>
									{stargazers.totalCount}
									{" Stars (Star)"}
								</Button>
							)}
						</Mutation>
					) : (
						<Mutation
							mutation={UNSTAR_REPO}
							variables={{ id }}
							optimisticResponse={{
								removeStar: {
									__typename: "Mutation",
									starrable: {
										__typename: "Repository",
										id,
										viewerHasStarred: !viewerHasStarred,
										stargazers: {
											__typename: "StargazerConnection",
											totalCount: stargazers.totalCount - 1,
										},
									},
								},
							}}>
							{removeStar => (
								<Button
									className="RepositoryItem-title-action"
									onClick={removeStar}>
									{stargazers.totalCount}
									{" Stars (Unstar)"}
								</Button>
							)}
						</Mutation>
					)}
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
						update={updateWatchers}>
						{updateSubscription => (
							<Button
								className="RepositoryItem-title-action"
								onClick={updateSubscription}>
								{watchers.totalCount}
								{" Watchers "}
								{viewerSubscription === "SUBSCRIBED"
									? "(Unwatch)"
									: "(Watch)"}
							</Button>
						)}
					</Mutation>
				</div>
			</div>

			<div className="RepositoryItem-description">
				<div
					className="RepositoryItem-description-info"
					dangerouslySetInnerHTML={{ __html: descriptionHTML }}
				/>
				<div className="RepositoryItem-description-details">
					<div>
						{primaryLanguage && (
							<span>Language: {primaryLanguage.name}</span>
						)}
					</div>
					<div>
						{owner && (
							<span>
								Owner: <a href={owner.url}>{owner.login}</a>
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RepositoryItem;
