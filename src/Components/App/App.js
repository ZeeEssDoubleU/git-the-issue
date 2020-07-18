import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
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

// ********
// component
// ********

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
					<AppGrid>
						<Navigation orgState={orgState} orgSearch={orgSearch} />
						<Main>
							<Route exact path="/">
								<Organization organizationName={orgState} />
							</Route>
							<Route exact path="/profile">
								<Profile />
							</Route>
						</Main>
					</AppGrid>
				</StoreProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;

// ********
// styles
// ********

const AppGrid = styled(Grid)`
	height: 100%;
	width: 100%;
	gap: 0;
`;
const Main = styled.main`
	overflow: scroll;
`;
