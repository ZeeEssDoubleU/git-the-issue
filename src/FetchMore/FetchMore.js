import React from "react";

// import styles
import "./FetchMore.css";
// import components
import Loading from "../Loading/Loading";
import { ButtonUnobtrusive } from "../Button/Button";

const FetchMore = ({
	loading,
	hasNextPage,
	variables,
	updateQuery,
	fetchMore,
	children,
}) => (
	<div className="FetchMore">
		{loading ? (
			<Loading />
		) : (
			// TODO: Add prefetching to 'more repositories' and 'more comments' buttons
			hasNextPage && (
				<ButtonUnobtrusive
					type="button"
					className="FetchMore-button"
					onClick={() => fetchMore({ variables, updateQuery })}
				>
					{children}
				</ButtonUnobtrusive>
			)
		)}
	</div>
);

export default FetchMore;
