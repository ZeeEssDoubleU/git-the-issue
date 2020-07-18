import React from "react";
import { Query } from "react-apollo";
// import components
import CommentList from "./CommentList";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
// import queries / mutations / etc
import { GET_COMMENTS_OF_ISSUE } from "../../gql-types";

// ********
// component
// ********

export default function Comments({
	repositoryName,
	repositoryOwner,
	issueNumber,
}) {
	return (
		<div className="Comments">
			<Query
				query={GET_COMMENTS_OF_ISSUE}
				variables={{
					repositoryName,
					repositoryOwner,
					number: issueNumber,
				}}
				notifyOnNetworkChange={true}
			>
				{({ data, loading, error, fetchMore }) => {
					if (error) return <Error error={error} />;

					const { repository, viewer } = data;
					// return loading indicator
					if (loading && !repository)
						return (
							<div className="CommentList">
								<header className="CommentList-header">
									<Loading />
								</header>
							</div>
						);

					return (
						<CommentList
							loading={loading}
							fetchMore={fetchMore}
							viewer={viewer}
							issue={repository.issue}
							repositoryId={repository.id}
							repositoryName={repositoryName}
							repositoryOwner={repositoryOwner}
						/>
					);
				}}
			</Query>
		</div>
	);
}

// ********
// styles
// ********
