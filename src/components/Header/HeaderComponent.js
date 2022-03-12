import React from "react";
import "./header.css";
import { GithubIcon } from "../../svg";
import { useNavigate, Link } from "react-router-dom";

export default function HeaderComponent() {
	return (
		<div className="header">
			<div className="header-left-section">
				<div className="header-github-icon">
					<GithubIcon />
				</div>
				<h1 className="header-github-title">Github Search</h1>
			</div>
			<div className="header-right-section">
				<Link to={"/"}>
					<p
						className="header-github-p"
						// onClick={() => navigate("/")}
					>
						Home
					</p>
				</Link>
				<Link to={"/about"}>
					<p className="header-github-p">About</p>
				</Link>
			</div>
		</div>
	);
}
