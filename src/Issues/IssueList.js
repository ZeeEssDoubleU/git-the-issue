import React from "react";

// import styles
import "./IssueList.css";
// import components
import IssueItem from "./IssueItem";

const IssueList = ({ issues }) => {
	return (
		<div className="IssueList">
			{issues.edges.map(({ node }) => (
				<IssueItem key={node.id} issue={node} />
			))}
		</div>
	);
};

export default IssueList;
