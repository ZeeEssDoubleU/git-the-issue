import React from "react";
import styled from "styled-components/macro";

// ********
// components
// ********

export default function Loading() {
	return <Container>Loading...</Container>;
}

// ********
// styles
// ********

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px 0;
`;
