import React, { useState } from "react";

// import styles
import "./Navigation.css";
// import components
import Input from "../Input/Input";
import Button from "../Button/Button";

const Search = ({ orgState, orgSearch }) => {
	const [searchState, setSearchState] = useState(orgState);

	const onChange = event => {
		setSearchState(event.target.value);
	};
	const onSubmit = event => {
		event.preventDefault();
		orgSearch(searchState);
	};

	return (
		<div className="Navigation-search">
			<form onSubmit={onSubmit}>
				<Input
					color="white"
					type="text"
					value={searchState}
					onChange={onChange}
				/>
				<Button color="white" type="submit">
					Search
				</Button>
			</form>
		</div>
	);
};

export default Search;
