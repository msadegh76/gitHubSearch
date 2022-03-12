import React, { useEffect, useState } from "react";
import "./home.css";
import UserCardComponent from "../../components/UserCardComponent/UserCardComponent";
import { useDispatch, useSelector } from "react-redux";
import { addUser, userClear } from "../../redux/actions/Actions";
import Loading from "../UserPage/components/Loading/Loading";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import CustomButtonComponent from "../../components/CustomButtonComponent/CustomButtonComponent";

function HomePage() {
	const users = useSelector((state) => state.userList);
	const loading = useSelector((state) => state.loading);
	const error = useSelector((state) => state.error);
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
	const handleSearchSubmit = async () => {
		if (!search) {
			setNoData(true);
			timer = setTimeout(() => setNoData(false), 2000);
		} else {
			dispatch(addUser(search));
		}
	};

	return (
		<div className="homepage">
			<div className="home-search-section">
				{noData && (
					<CustomButtonComponent
						text="Please Enter Something !"
						handleClick={null}
						customClass="home-button-clear"
					/>
				)}

				<div className="home-input-container">
					<input
						type="text"
						placeholder="Search Users..."
						className="home-input"
						onChange={handleSearch}
					/>
				</div>

				<CustomButtonComponent
					text="submit"
					customClass=""
					handleClick={handleSearchSubmit}
				/>
				{users.length !== 0 && (
					<CustomButtonComponent
						text="clear"
						customClass="home-button-clear"
						handleClick={handleClear}
					/>
				)}
				<Loading loading={loading} />
			</div>
			<div className="home-body">
				<ErrorComponent error={error} />
				{users.length !== 0 &&
					users.map((item) => {
						return <UserCardComponent key={item.id} {...item} />;
					})}
			</div>
		</div>
	);
}

export default HomePage;
