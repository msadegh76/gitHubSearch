import React from "react";
import { Link } from "react-router-dom";
import "./user-card.css";

const UserCard = ({ login: userName, avatar_url }) => {
	return (
		<div className="user-card ">
			{/* <div className="user-avatar-container"> */}
			<img
				src={avatar_url}
				alt="avatar"
				className="user-avatar user-card-item"
			/>
			{/* </div> */}
			<div className="user-name user-card-item">{userName}</div>
			<div className="user-more user-card-item">
				<button className="user-more-button">
					<Link to={`/user/${userName}`} className="user-link">
						More
					</Link>
				</button>
			</div>
		</div>
	);
};
export default UserCard;
