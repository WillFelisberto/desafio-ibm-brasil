import React, { useEffect } from 'react';

import SearchBar from '../common/SearchBar';
import BooksListing from '../BooksListing/BooksListing';
import { useDispatch } from 'react-redux';
import { clearBooks } from '../../store/book-search/actions';

export default function Home() {
	const dispatch = useDispatch();
	// const [search, setSearch] = useState('');

	useEffect(() => {
		dispatch(clearBooks());
	}, []);

	return (
		<div>
			<SearchBar />
			<BooksListing />
		</div>
	);
}
