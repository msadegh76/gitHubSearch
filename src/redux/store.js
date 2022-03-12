import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userDataReducer from "./reducers/userDataReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
	userDataReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
