import React from "react";

// import styles
import "./Repository.css";
//import components
import Link from "../Link/Link";
import StarRepo from "./StarRepo";
import UnstarRepo from "./UnstarRepo";
import WatchRepo from "./WatchRepo";

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
		<div>
			<div className="RepositoryItem-title">
				<h2>
					<Link href={url}>{name}</Link>
				</h2>

				<div className="RepositoryItem-title-action">
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
				</div>
			</div>

			<div className="RepositoryItem-description">
				<div className="RepositoryItem-description-info">{description}</div>
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
