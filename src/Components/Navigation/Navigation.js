import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components/macro";
// import components
import Search from "./Search";
// import styles
import { Grid, CollapsibleGrid } from "../../styles/elements";
// import constants
import { ROUTES } from "../../constants";

// ********
// component
// ********

const Navigation = ({ location, orgState, orgSearch }) => {
	return (
		<NavBar>
			{location.pathname === ROUTES.ORG && (
				<Search orgState={orgState} orgSearch={orgSearch} />
			)}
			<NavLinks>
				<NavLink to={ROUTES.ORG}>Organization</NavLink>
				<NavLink to={ROUTES.PROFILE}>Profile</NavLink>
				<NavLink
					as="a"
					href="GET https://github.com/login/NavLink/authorize"
				>
					Login
				</NavLink>
			</NavLinks>
		</NavBar>
	);
};

export default withRouter(Navigation);

// ********
// styles
// ********

const NavBar = styled(CollapsibleGrid)`
	position: fixed;
	top: 0;
	z-index: 1;
	width: 100%;
	padding: ${(props) => props.theme.grid.padding};
	background-color: #24292e;
`;
const NavLink = styled(Link)`
	font-size: 12px;
	letter-spacing: 3.5px;
	font-weight: 500;
	text-transform: uppercase;
	text-decoration: none;
	color: white;
`;
const NavLinks = styled(Grid)`
	grid-template-columns: auto auto auto;
`;
