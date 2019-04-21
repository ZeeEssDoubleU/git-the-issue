import React from "react";

// import styles
import "./Repository.css";
// import components
import RepositoryItem from "./RepositoryItem";

const RepositoryList = ({ repositories }) =>
	repositories.edges.map(({ node }) => (
		<div key={node.id} className="RepositoryItem">
			<RepositoryItem {...node} />
		</div>
	));

export default RepositoryList;
