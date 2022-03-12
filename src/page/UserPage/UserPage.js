import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import userDetailService from "../../services/userDetailService";
import userReposService from "../../services/userReposService";
import "./user-page.css";
import { XIcon, CheckIcon } from "../../svg";
import Loading from "./components/Loading/Loading";
import UserInfo from "./components/UserInfo/UserInfo";
import UserGitStatus from "./components/UserGitStatus/UserGitStatus";
import UserRepos from "./components/UserRepos/UserRepos";

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
				<Loading loading={loading} />
				<div className="user-page-top">
					<button className="back-to-search-btn btn">
						<Link to="/">Back To Search</Link>
					</button>
					<span className="user-hireable">
						hireable: {userData?.hireable ? <CheckIcon /> : <XIcon />}
					</span>
				</div>
				<UserInfo userData={userData} />
				<UserGitStatus userData={userData} />
				{userRepos.length !== 0 &&
					userRepos.map((item) => {
						return <UserRepos key={item.id} repo={item} />;
					})}
			</div>
		</div>
	);
}
