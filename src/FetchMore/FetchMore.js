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
			hasNextPage && (
				<ButtonUnobtrusive
					type="button"
					className="FetchMore-button"
					onClick={() => fetchMore({ variables, updateQuery })}>
					More {children}
				</ButtonUnobtrusive>
			)
		)}
	</div>
);

export default FetchMore;
