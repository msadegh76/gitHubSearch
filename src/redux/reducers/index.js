import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer";

const rootReducers = combineReducers({
	userDataReducer,
});

export default rootReducers;
