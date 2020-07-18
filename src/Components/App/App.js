import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
// import components
import Profile from "../Profile/Profile";
import Organization from "../Organization/Organization";

const App = () => {
	const [orgState, setOrgState] = useState("the-road-to-learn-react");

	const orgSearch = (value) => {
		setOrgState(value);
	};

	return (
		<BrowserRouter>
			<Layout orgState={orgState} orgSearch={orgSearch}>
				<Route exact path="/">
					<Organization organizationName={orgState} />
				</Route>
				<Route exact path="/profile">
					<Profile />
				</Route>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
