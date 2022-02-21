import {
	FAILURE_BOOKS,
	REQUEST_BOOKS,
	SUCCESS_BOOKS,
	CLEAR_BOOKS,
} from './constants';

const INITIAL_STATE = {
	data: [],
	loading: false,
	error: false,
	loaded: false,
	message: '',
};

export default function booksSearch(state = INITIAL_STATE, action) {
	switch (action.type) {
		case REQUEST_BOOKS:
			return { ...state, loading: true };
		case SUCCESS_BOOKS:
			return {
				...state,
				data: action.payload.data,
				loading: false,
				loaded: true,
				error: false,
			};
		case FAILURE_BOOKS:
			return {
				...state,
				data: [],
				loading: false,
				loaded: true,
				error: true,
				message: action.payload.message,
			};

		case CLEAR_BOOKS:
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
