import React from "react";
import { Mutation } from "react-apollo";
// import components
import Button from "../Button";
// import queries / mutations / etc
import { UNSTAR_REPO } from "../../gql-types";

// ********
// component
// ********

const UnstarRepo = ({ id, stargazers, viewerHasStarred }) => {
	return (
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
			}}
		>
			{(removeStar, { data, loading, error }) => (
				<Button
					className="RepositoryItem-title-action"
					onClick={removeStar}
				>
					{stargazers.totalCount}
					{" Stars (Unstar)"}
				</Button>
			)}
		</Mutation>
	);
};

export default UnstarRepo;

// ********
// styles
// ********
