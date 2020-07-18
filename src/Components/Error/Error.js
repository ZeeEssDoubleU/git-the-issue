import React from "react";

// import styles
import "./Error.css";

const Error = ({ error }) => (
	<div className="Error">
		<small>{error.toString()}</small>
	</div>
);

export default Error;