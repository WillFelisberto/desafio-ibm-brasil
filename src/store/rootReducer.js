import book from './book/reducer';
// import repositories from './repositories/reducer';
// import user from './user/reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	book,
	// repositories,
	// user,
});

export default rootReducer;
