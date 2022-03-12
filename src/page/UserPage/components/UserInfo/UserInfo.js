import React from "react";
import "./user-info.css";

export default function UserInfo({ userData }) {
	return (
		<div className="user-page-main">
			<div className="user-info">
				{userData?.avatar_url && (
					<img src={userData?.avatar_url} alt="avatar" />
				)}
				<span>{userData?.name}</span>
				<span>{userData?.location}</span>
			</div>
			<div className="user-info">
				{userData?.bio && <span>Bio: {userData?.bio}</span>}
				{userData?.html_url && (
					<a
						href={userData?.html_url}
						className="badge badge-black user-github"
					>
						Visit Github Page
					</a>
				)}
				{userData?.login && <span>Login: {userData?.login}</span>}
			</div>
		</div>
	);
}
