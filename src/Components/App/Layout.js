import React from "react";
import { styled, ThemeProvider } from "styled-components/macro";
// import components
import Navigation from "../Navigation/Navigation";
// import styles
import ResetStyles from "../../styles/reset";
import theme from "../../styles/theme";

export default function Layout({ children, ...props }) {
	return (
		<>
			<ResetStyles />
			<ThemeProvider theme={theme}>
				<Navigation orgState={props.orgState} orgSearch={props.orgSearch} />
				{children}
			</ThemeProvider>
		</>
	);
}
