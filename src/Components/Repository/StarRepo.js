import React from "react";
import { Mutation } from "react-apollo";
// import components
import Button from "../Button/Button";
// import queries / mutations / etc
import { STAR_REPO } from "../../gql-types";

// ********
// component
// ********

const StarRepo = ({ id, stargazers, viewerHasStarred }) => {
	return (
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
			}}
		>
			{(addStar, { data, loading, error }) => (
				<Button onClick={addStar}>
					{stargazers.totalCount}
					{" Stars (Star)"}
				</Button>
			)}
		</Mutation>
	);
};

StarRepo.propTypes = {};

export default StarRepo;

// ********
// styles
// ********
