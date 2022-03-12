const initialState = {
	userList: [],
	loading: false,
	error: null,
};
function userDataReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_USER_DATA_REQUEST": {
			return {
				...state,
				loading: action.loading,
				error: action.error,
			};
		}
		case "SET_USER_DATA_FAILURE": {
			return {
				...state,
				error: action.error,
				loading: action.loading,
				userList: action.payload,
			};
		}
		case "SET_USER_DATA_SUCCESS": {
			return {
				...state,
				userList: action.payload,

				loading: action.loading,
			};
		}
		case "SET_USER_DATA_CLEAR": {
			return {
				...state,
				userList: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}

export default userDataReducer;
