import {
	FAILURE_BOOK,
	REQUEST_BOOK,
	SUCCESS_BOOK,
	CLEAR_BOOK,
} from './constants';

const INITIAL_STATE = {
	data: [],
	loading: false,
	error: false,
	loaded: false,
	message: '',
};

export default function bookReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case REQUEST_BOOK:
			return { ...state, loading: true };
		case SUCCESS_BOOK:
			return {
				...state,
				data: action.payload.data,
				loading: false,
				loaded: true,
				error: false,
			};
		case FAILURE_BOOK:
			return {
				...state,
				data: [],
				loading: false,
				loaded: true,
				error: true,
				message: action.payload.message,
			};

		case CLEAR_BOOK:
			return {
				...state,
				data: [],
				loading: false,
				loaded: false,
				error: false,
			};
		default:
			return state;
	}
}
