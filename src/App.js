import React from "react";
import PageRoutes from "../src/PageRoutes";
import "./App.css";
import { ErrorBoundary } from "./Hook/ErrorBoundary";

function App() {
	return (
		<>
			<ErrorBoundary FallbackRender={() => <div>error</div>}>
				<PageRoutes />
			</ErrorBoundary>
		</>
	);
}

export default App;
