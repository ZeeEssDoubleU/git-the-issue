import React from "react";
import { Query } from "react-apollo";

// import styles
import "./Comments.css";
// import components
import CommentList from "./CommentList";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
// import queries / mutations / etc
import { GET_COMMENTS_OF_ISSUE } from "../gql-types";

const Comments = ({ repositoryName, repositoryOwner, issueNumber }) => {
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
							repositoryId={repository.id}
							repositoryName={repository.name}
							repositoryOwner={repository.owner.login}
							issue={repository.issue}
							viewer={viewer}
						/>
					);
				}}
			</Query>
		</div>
	);
};

export default Comments;
