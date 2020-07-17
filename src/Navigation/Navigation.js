import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
// import components
import Search from "./Search";
// import constants
import { ROUTES } from "../constants";

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

const NavBar = styled.header`
	position: fixed;
	top: 0;
	z-index: 1;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: #24292e;

	@media only screen and (max-device-width: 720px) {
		justify-content: space-around;
	}
`;

const NavLink = styled(Link)`
	font-size: 12px;
	letter-spacing: 3.5px;
	font-weight: 500;
	text-transform: uppercase;
	margin: 0.75rem;
	text-decoration: none;
	color: white;
`;

const NavLinks = styled.div`
	display: flex;
	align-items: center;
`;
