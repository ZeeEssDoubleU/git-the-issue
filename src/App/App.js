import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import styles
import "./App.css";
// import components
import Profile from "../Profile/Profile";
import Organization from "../Organization/Organization";
import Navigation from "../Navigation/Navigation";

const App = () => {
	const [orgState, setOrgState] = useState("the-road-to-learn-react");

	const orgSearch = value => {
		setOrgState(value);
	};

	return (
		<BrowserRouter>
			<div className="App">
				<Navigation orgState={orgState} orgSearch={orgSearch} />
				<div className="App-main">
					<Route
						exact
						path="/"
						component={() => (
							<div className="App-content_large-header">
								<Organization organizationName={orgState} />
							</div>
						)}
					/>
					<Route
						exact
						path="/profile"
						component={() => (
							<div className="App-content_small-header">
								<Profile />
							</div>
						)}
					/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
