import React from "react";
import { Mutation } from "react-apollo";

// import components
import Button from '../Button/Button';
// import queries / mutations / etc
import { STAR_REPO } from "../gql-types";

const StarRepo = ({id, stargazers, viewerHasStarred}) => {
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
				<Button className="RepositoryItem-title-action" onClick={addStar}>
					{stargazers.totalCount}
					{" Stars (Star)"}
				</Button>
			)}
		</Mutation>
	);
};

StarRepo.propTypes = {};

export default StarRepo;
