import { createStore } from "redux";
import RootReducers from "./reducers";
import userDataReducer from "./reducers/userDataReducer";
const store = createStore(
	userDataReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
