import axios from "axios";
import {
	SET_USER_DATA_SUCCESS,
	SET_USER_DATA_REQUEST,
	SET_USER_DATA_FAILURE,
	SET_USER_DATA_CLEAR,
} from "./ActionTypes";
const baseURL = "https://api.github.com/search/users";
export const addUser = (user) => {
	return async (dispatch) => {
		dispatch(userRequest());
		axios
			.get(baseURL + `?q=${user}&client_id=undefined&client_secret=undefined`)
			.then((response) => {
				dispatch(userSuccess(response?.data?.items));
			})
			.catch((error) => dispatch(userError(error)));
	};
};

export const userRequest = () => {
	return { type: SET_USER_DATA_REQUEST, loading: true };
};

export const userError = (error) => {
	return {
		type: SET_USER_DATA_FAILURE,
		payload: [],
		loading: false,
		error,
	};
};

export const userSuccess = (users) => {
	return {
		type: SET_USER_DATA_SUCCESS,
		payload: users,
		loading: false,
	};
};

export const userClear = () => {
	return {
		type: SET_USER_DATA_CLEAR,
		payload: [],
	};
};
