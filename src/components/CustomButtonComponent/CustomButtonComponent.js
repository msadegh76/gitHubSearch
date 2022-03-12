import React from "react";
import "./custom-button.css";

export default function CustomButtonComponent({
	text,
	handleClick,
	customClass,
}) {
	return (
		<div className="home-button-container btn">
			<button
				onClick={handleClick}
				className={`home-button ${customClass} btn `}
			>
				{text}
			</button>
		</div>
	);
}
