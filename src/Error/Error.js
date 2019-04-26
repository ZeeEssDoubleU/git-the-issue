import React from "react";

// import styles
import "./Error.css";

const ErrorMessage = ({ error }) => (
	<div className="ErrorMessage">
		<small>{error.toString()}</small>
	</div>
);

export default ErrorMessage;