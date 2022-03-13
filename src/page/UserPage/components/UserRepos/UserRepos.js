import React from "react";

export default function UserRepos({ repo }) {
	return (
		<div className="user-page-data user-repos">
			<a href={repo?.html_url}>{repo?.name}</a>
		</div>
	);
}
