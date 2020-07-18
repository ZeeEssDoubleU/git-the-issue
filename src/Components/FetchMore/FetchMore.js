import React from "react";
import styled from "styled-components";
// import components
import Loading from "../Loading/Loading";
import Button from "../Button/Button";

// ********
// component
// ********

const FetchMore = ({
	loading,
	hasNextPage,
	variables,
	updateQuery,
	fetchMore,
	children,
}) => (
	<>
		{loading ? (
			<Loading />
		) : (
			// TODO: Add prefetching to 'more repositories' and 'more comments' buttons
			hasNextPage && (
				<StyledButton
					type="button"
					onClick={() => fetchMore({ variables, updateQuery })}
				>
					{children}
				</StyledButton>
			)
		)}
	</>
);

export default FetchMore;

// ********
// styles
// ********

const StyledButton = styled(Button)`
	justify-self: center;
`;
