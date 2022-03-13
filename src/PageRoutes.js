import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import AboutPage from "./page/AboutPage/AboutPage";
import HomePage from "./page/Home/HomePage";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage";
import UserPage from "./page/UserPage/UserPage";
export default function PageRoutes() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route
					exact
					path="/gitHubSearch"
					element={<Navigate replace to="/" />}
				/>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/user/:name" element={<UserPage />} />
				<Route exact path="/about" element={<AboutPage />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

//All of our Routes in website  or if not found redirect to Not found page
