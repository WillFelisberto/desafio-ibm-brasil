import { REQUEST_BOOKS, CLEAR_BOOKS } from './constants';

export function loadBooks(params, page) {
	return { type: REQUEST_BOOKS, params, page };
}

export function clearBooks() {
	return { type: CLEAR_BOOKS };
}
