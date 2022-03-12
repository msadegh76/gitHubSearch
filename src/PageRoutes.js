import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import Home from "./page/Home/Home";
import UserPage from "./page/UserPage/UserPage";
import About from "./page/About/About";
export default function PageRoutes() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/user/:name" element={<UserPage />} />
				<Route exact path="/about" element={<About />} />
			</Routes>
		</>
	);
}
