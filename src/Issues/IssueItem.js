import React from "react";

// import styles
import "./IssueItem.css";
// import components
import Link from "../Link/Link";

const IssueItem = ({ issue }) => {
	return (
		<div className="IssueItem">
			{/* TODO: show/hide comment button */}
			<div className="IssueItem-content">
				<h3>
					<Link href={issue.url}>{issue.title}</Link>
				</h3>
				<div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
				{/* TODO: render a list of comments */}
			</div>
		</div>
	);
};

export default IssueItem;
