import React from "react";
import { Link } from "react-router-dom";
import "./not-found.css";

export default function NotFoundPage() {
	return (
		<>
			<div className="not-found">
				<h1> NotFound </h1>
				<h1>404</h1>
				<Link to="/" className="badge badge-black">
					{" "}
					Back To Home
				</Link>
			</div>
		</>
	);
}
