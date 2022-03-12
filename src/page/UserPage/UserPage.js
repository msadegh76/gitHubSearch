import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import userDetailService from "../../services/userDetailService";
import userReposService from "../../services/userReposService";
import "./user-page.css";
import { XIcon, CheckIcon, LoadingIcon } from "../../svg";

export default function UserPage() {
	const params = useParams();
	const [userData, setUserData] = useState({});
	const [userRepos, setUserRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		let response = userDetailService(params.name);
		response.then((res) => setUserData(res));
		let userReposresponse = userReposService(params.name);
		userReposresponse.then((res) => {
			setUserRepos(res);
		});
		setLoading(false);
	}, []);

	return (
		<div className="user-page">
			<div className="user-page-body">
				{loading && (
					<div className="user-loading">
						<LoadingIcon />
					</div>
				)}
				<div className="user-page-top">
					<button className="back-to-search-btn">
						<Link to="/">Back To Search</Link>
					</button>
					<span className="user-hireable">
						hireable: {userData?.hireable ? <CheckIcon /> : <XIcon />}
					</span>
				</div>
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
				<div className="user-page-data">
					<div className="badge badge-red">Followers {userData?.followers}</div>
					<div className="badge badge-light">
						Followings{userData?.following}
					</div>
					<div className="badge badge-green">
						Public Gits {userData?.public_gists}
					</div>
					<div className="badge badge-black">
						Public Repos {userData?.public_repos}
					</div>
				</div>
				{userRepos.length !== 0 &&
					userRepos.map((item) => {
						return (
							<div key={item.id} className="user-page-data user-repos">
								<a href={item?.url}>{item?.name}</a>
							</div>
						);
					})}
			</div>
		</div>
	);
}
