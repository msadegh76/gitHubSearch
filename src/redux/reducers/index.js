import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer";

const RootReducers = combineReducers({
	userDataReducer,
});

export default RootReducers;
