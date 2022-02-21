import book from './book/reducer';
import pages from './pages/reducer';
import term from './search-term/reducer';
import booksSearch from './book-search/reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	book,
	pages,
	booksSearch,
	term,
});

export default rootReducer;
