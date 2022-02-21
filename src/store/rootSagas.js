import { all, fork } from 'redux-saga/effects';

import * as booksSagas from './book/sagas';
// import * as repositoriesSagas from './repositories/sagas';
// import * as userSagas from './user/sagas';

export default function* rootSaga() {
	yield all([...Object.values(booksSagas)].map(fork));
	// yield all([...Object.values(repositoriesSagas)].map(fork));
	// yield all([...Object.values(userSagas)].map(fork));
}
