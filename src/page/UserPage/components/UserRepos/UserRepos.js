import React from "react";

export default function UserRepos({ repo }) {
	return (
		<div className="user-page-data user-repos">
			<a href={repo?.url}>{repo?.name}</a>
		</div>
	);
}
