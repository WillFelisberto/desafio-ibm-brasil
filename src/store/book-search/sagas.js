import { put, call, takeLatest } from 'redux-saga/effects';
import { searchBook } from '../../api/services';
import { FAILURE_BOOKS, REQUEST_BOOKS, SUCCESS_BOOKS } from './constants';

async function searchBooks(params) {
	try {
		return await searchBook(params.params, params.page);
	} catch (error) {
		throw error;
	}
}

function* getBook(params) {
	try {
		const response = yield call(searchBooks, params);

		yield put({ type: SUCCESS_BOOKS, payload: { data: response } });
	} catch (err) {
		yield put({ type: FAILURE_BOOKS, payload: { message: err.message } });
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeLatest(REQUEST_BOOKS, getBook);
}
