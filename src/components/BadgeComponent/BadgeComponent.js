import React from "react";
import "./badge.css";

export default function Badge({ title, colorClass }) {
	return <div className={`badge ${colorClass}`}>{title}</div>;
}
