import React from "react";
import { Link, withRouter } from "react-router-dom";

// import styles
import "./Navigation.css";
// import constants
import { ROUTES } from "../constants";
// import components
import Search from "./Search";

const Navigation = ({ location, orgState, orgSearch }) => {
	return (
		<header className="Navigation">
			<div className="Navigation-link">
				<Link to={ROUTES.PROFILE}>Profile</Link>
			</div>
			<div className="Navigation-link">
				<Link to={ROUTES.ORG}>Organization</Link>
			</div>
			{location.pathname === ROUTES.ORG && (
				<Search orgState={orgState} orgSearch={orgSearch} />
			)}
		</header>
	);
};

export default withRouter(Navigation);
