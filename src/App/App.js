import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import styles
import "./App.css";
// import components
import Profile from "../Profile/Profile";
import Organization from "../Organization/Organization";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="App-main">
					<Route
						exact
						path="/"
						component={() => (
							<div className="App-content_large-header">
								<Organization />
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
