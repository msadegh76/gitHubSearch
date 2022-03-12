// import { SetUserData, GetUserData } from "../actions/ActionTypes";

const initialState = {
	user: [],
};
function userDataReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_USER_DATA": {
			return {
				...state,
				user: action.payload,
			};
		}
		// case GetUserData: {
		// 	return {
		// 		...state,
		// 		user: action.payload,
		// 	};
		// }
		default: {
			return state;
		}
	}
}

export default userDataReducer;
