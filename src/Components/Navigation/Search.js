import React, { useState } from "react";
import styled from "styled-components/macro";
// import components
import Button from "../Button";

// ********
// component
// ********

const Search = ({ orgState, orgSearch }) => {
	const [searchState, setSearchState] = useState(orgState);

	const onChange = (event) => {
		setSearchState(event.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		orgSearch(searchState);
	};

	return (
		<Container onSubmit={onSubmit}>
			<Input
				color="white"
				type="text"
				value={searchState}
				onChange={onChange}
				placeholder="Search for an organization..."
			/>
			<StyledButton color="white" type="submit">
				Search
			</StyledButton>
		</Container>
	);
};

export default Search;

// ********
// styles
// ********

const Container = styled.form`
	display: flex;
`;
const Input = styled.input`
	width: 14rem;
	border: none;
	border-bottom: 1px solid ${(props) => props.color};
	border-radius: 0;
	outline: none;
	background: none;
	color: ${(props) => props.color};
	transition: background.4s;

	&:focus {
		background: ${(props) =>
			props.color === "white"
				? `hsla(0, 0%, 100%, 0.1)`
				: props.color === "black"
				? `hsla(0, 0%, 0%, 0.1)`
				: "none"};
	}
`;
const StyledButton = styled(Button)`
	margin-left: 0;
`;
