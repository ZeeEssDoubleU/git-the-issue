import React, { useState } from "react";
import styled from "styled-components";
// import components
import Button from "../Button/Button";

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
		<Container>
			<FlexForm onSubmit={onSubmit}>
				<Input
					color="white"
					type="text"
					value={searchState}
					onChange={onChange}
					placeholder="Search for an organization..."
				/>
				<Button color="white" type="submit">
					Search
				</Button>
			</FlexForm>
		</Container>
	);
};

export default Search;

// ********
// styles
// ********

const Container = styled.div`
	margin: 0.75rem;
`;

const FlexForm = styled.form`
	display: flex;
	flex: 1;
`;

const Input = styled.input`
	border: none;
	padding: 10px;
	background: none;
	outline: none;
	width: 200px;

	border-bottom: 1px solid ${(props) => props.color};
	color: ${(props) => props.color};
	transition: background.4s;

	&:focus {
		background: ${(props) =>
			props.color === "white"
				? "rgba(255, 255, 255, 0.1)"
				: props.color === "black"
				? "rgba(0, 0, 0, 0.1)"
				: "none"};
	}
`;
