import React from "react";
import styled from "styled-components/macro";

// ********
// component
// ********

export default function Error({ error }) {
	return (
		<Container>
			<small>{error.toString()}</small>
		</Container>
	);
}

// ********
// styles
// ********

const Container = styled.div`
	margin: 20px;
	display: flex;
	justify-content: center;
`;
