import React from "react";
import Badge from "../../../../components/BadgeComponent/BadgeComponent";
import "./user-git-status.css";

export default function UserGitStatus({ userData }) {
	return (
		<div className="user-page-data">
			<Badge
				colorClass="badge-red"
				title={`Followers: ${userData?.followers} `}
			/>
			<Badge
				colorClass="badge-light"
				title={`Followings: ${userData?.following}`}
			/>
			<Badge
				colorClass="badge-green"
				title={`Public Gits: ${userData?.public_gists}`}
			/>
			<Badge
				colorClass="badge-black"
				title={`Public Repos: ${userData?.public_repos} `}
			/>
		</div>
	);
}
