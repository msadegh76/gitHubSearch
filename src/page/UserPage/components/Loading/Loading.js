import React from "react";
import { LoadingIcon } from "../../../../svg";
import "./loading.css";

export default function Loading({ loading }) {
	return (
		<>
			{loading && (
				<div className="user-loading">
					<LoadingIcon />
				</div>
			)}
		</>
	);
}
