import React, { useEffect, useState } from "react";
import "./home.css";
import UserCard from "../../components/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addUser, userClear } from "../../redux/actions/Actions";
import { LoadingIcon } from "../../svg";

function Home() {
	const users = useSelector((state) => state.userList);
	const loading = useSelector((state) => state.loading);
	const [search, setSearch] = useState();
	const [noData, setNoData] = useState(false);
	const dispatch = useDispatch();

	let timer;
	useEffect(() => () => clearTimeout(timer), []);
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};
	const handleClear = () => {
		dispatch(userClear());
	};
	const handleSearchSubmit = async (param) => {
		if (!param) {
			setNoData(true);
			timer = setTimeout(() => setNoData(false), 2000);
		} else {
			dispatch(addUser(param));
		}
	};

	return (
		<div className="homepage">
			<div className="home-search-section">
				{noData && (
					<div className="home-button-container">
						<button className="home-button home-button-clear ">
							Please Enter Something !
						</button>
					</div>
				)}
				<div className="home-input-container">
					<input
						type="text"
						placeholder="Search Users..."
						className="home-input"
						onChange={handleSearch}
					/>
				</div>

				<div className="home-button-container">
					<button
						className="home-button"
						onClick={() => handleSearchSubmit(search)}
					>
						submit
					</button>
				</div>
				{users.length !== 0 && (
					<div className="home-button-container">
						<button
							className="home-button home-button-clear"
							onClick={handleClear}
						>
							clear
						</button>
					</div>
				)}
				{loading && (
					<div className="user-loading">
						<LoadingIcon />
					</div>
				)}
			</div>
			<div className="home-body">
				{" "}
				{users.length !== 0 &&
					users.map((item) => {
						return <UserCard key={item.id} {...item} />;
					})}
			</div>
		</div>
	);
}

export default Home;
