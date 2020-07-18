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

const RepoDetails = ({
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
				<RepoMetadata>{description}</RepoMetadata>
				<RepoMetadata>
					{owner && (
						<RepoMetadata>
							Owner: <a href={owner.url}>{owner.login}</a>
						</RepoMetadata>
					)}
					{primaryLanguage && (
						<RepoMetadata>Language: {primaryLanguage.name}</RepoMetadata>
					)}
				</RepoMetadata>
			</DetailsGrid>
		</Grid>
	);
};

export default RepoDetails;

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
const RepoMetadata = styled.div`
	line-height: 1.5rem;
`;
