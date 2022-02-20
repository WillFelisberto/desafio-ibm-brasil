import { REQUEST_BOOK, CLEAR_BOOK } from './constants';

export function loadBookDetail(id) {
	return { type: REQUEST_BOOK, id };
}
export function ClearBook() {
	return { type: CLEAR_BOOK };
}
