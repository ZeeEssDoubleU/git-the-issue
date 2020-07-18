import React from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import styled from "styled-components/macro";
// import components
import Search from "./Search";
// import store provider
import useStore from "../../store/useStore";
// import styles
import { Grid, CollapsibleGrid } from "../../styles/elements";
// import constants
import { ROUTES } from "../../constants";

// ********
// component
// ********

const Navigation = ({ orgState, orgSearch }) => {
	const { state } = useStore();
	const location = useLocation();

	return (
		<header>
			<NavBar as="nav">
				<Search orgState={orgState} orgSearch={orgSearch} />
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
			<Header>
				{location.pathname === "/profile" ? state.viewer : orgState}
			</Header>
		</header>
	);
};

export default withRouter(Navigation);

// ********
// styles
// ********

const Header = styled.h1`
	text-align: center;
	background: white;
	border-bottom: 1px solid black;
	@media (max-width: 480px) {
		font-size: 28px;
	}
`;
const NavBar = styled(CollapsibleGrid)`
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
