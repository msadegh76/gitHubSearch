import React from "react";
import { ErrorIcon } from "../../svg";

export default function ErrorComponent({ error }) {
	return (
		<>
			{" "}
			{error && (
				<div className="error">
					<ErrorIcon />
				</div>
			)}
		</>
	);
}
