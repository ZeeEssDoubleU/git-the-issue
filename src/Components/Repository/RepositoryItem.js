import React from "react";
import styled from "styled-components/macro";
// import components
import Link from "../Link/Link";
import StarRepo from "./StarRepo";
import UnstarRepo from "./UnstarRepo";
import WatchRepo from "./WatchRepo";
// import styles
import { Grid, CollapsibleGrid } from "../../styles/elements";

// ********
// component
// ********

const RepositoryItem = ({
	id,
	name,
	url,
	description,
	primaryLanguage,
	owner,
	stargazers,
	watchers,
	viewerSubscription,
	viewerHasStarred,
}) => {
	return (
		<Grid>
			<CollapsibleGrid>
				<h2>
					<Link href={url}>{name}</Link>
				</h2>

				<ButtonGrid>
					{/* // TODO: combine StarRepo and UnstarRepo into single component */}
					{!viewerHasStarred ? (
						<StarRepo
							id={id}
							stargazers={stargazers}
							viewerHasStarred={viewerHasStarred}
						/>
					) : (
						<UnstarRepo
							id={id}
							stargazers={stargazers}
							viewerHasStarred={viewerHasStarred}
						/>
					)}
					<WatchRepo
						id={id}
						watchers={watchers}
						viewerSubscription={viewerSubscription}
					/>
				</ButtonGrid>
			</CollapsibleGrid>

			<DetailsGrid>
				<RepoDetails>{description}</RepoDetails>
				<RepoDetails>
					{owner && (
						<RepoDetails>
							Owner: <a href={owner.url}>{owner.login}</a>
						</RepoDetails>
					)}
					{primaryLanguage && (
						<RepoDetails>Language: {primaryLanguage.name}</RepoDetails>
					)}
				</RepoDetails>
			</DetailsGrid>
		</Grid>
	);
};

export default RepositoryItem;

// ********
// styles
// ********

const ButtonGrid = styled(Grid)`
	grid-template-columns: 1fr 1fr;
	justify-items: stretch;
	column-gap: ${(props) => props.theme.grid.gap};
`;
const DetailsGrid = styled(CollapsibleGrid)`
	align-items: start;
`;
const RepoDetails = styled.div`
	line-height: 1.5rem;
`;
