import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import components
import Navigation from "../Navigation/Navigation";
import { Grid } from "../../styles/elements";
import Profile from "../Profile/Profile";
import Organization from "../Organization/Organization";
// import providers
import { ThemeProvider } from "styled-components/macro";
import { StoreProvider } from "../../store/useStore";
// import styles
import ResetStyles from "../../styles/reset";
import theme from "../../styles/theme";

const App = () => {
	const [orgState, setOrgState] = useState("the-road-to-learn-react");

	const orgSearch = (value) => {
		setOrgState(value);
	};

	// {/* <h1 className="profile-header">{viewer.login}</h1> */}
	return (
		<ThemeProvider theme={theme}>
			<ResetStyles />
			<BrowserRouter>
				<StoreProvider>
					<Grid>
						<Navigation orgState={orgState} orgSearch={orgSearch} />
						<Route exact path="/">
							<Organization organizationName={orgState} />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
					</Grid>
				</StoreProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
