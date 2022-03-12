import React, { useEffect, useState } from "react";
import "./home.css";
import userListService from "../../services/userListService";
import UserCard from "../../components/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { addUser } from "../../redux/actions/ActionTypes";
import { LoadingIcon } from "../../svg";

function Home() {
	const globalUsers = useSelector((state) => state.user);
	const [users, setUsers] = useState(globalUsers);
	const [search, setSearch] = useState();
	const [noData, setNoData] = useState(false);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	let timer;
	useEffect(() => () => clearTimeout(timer), []);
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};
	const handleClear = () => {
		setUsers([]);
	};
	const handleSearchSubmit = async (param) => {
		if (!param) {
			setNoData(true);
			timer = setTimeout(() => setNoData(false), 2000);
		} else {
			setLoading(true);
			let response = await userListService(param);
			setUsers(response.items);
			setLoading(false);
			dispatch(addUser(response.items));
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
// const mapStateToProps = (state) => ({ data: state.data });
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addUser: () => dispatch(addUser),
// 	};
// };

export default Home;
// connect(mapStateToProps, mapDispatchToProps)(Home);
