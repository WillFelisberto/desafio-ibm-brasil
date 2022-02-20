import { put, call, takeLatest } from 'redux-saga/effects';
import { getBookDetails } from '../../api/services';
import { FAILURE_BOOK, REQUEST_BOOK, SUCCESS_BOOK } from './constants';

async function searchBook(id) {
	try {
		return await getBookDetails(id);
	} catch (error) {
		throw error;
	}
}

function* getBook(action) {
	try {
		const response = yield call(searchBook, action.id);

		yield put({ type: SUCCESS_BOOK, payload: { data: response } });
	} catch (err) {
		yield put({ type: FAILURE_BOOK, payload: { message: err.message } });
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeLatest(REQUEST_BOOK, getBook);
}
