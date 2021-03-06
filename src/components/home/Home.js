import React, { useEffect } from 'react';

import SearchBar from '../common/SearchBar';
import BooksListing from '../BooksListing/BooksListing';
import { useDispatch } from 'react-redux';
import { clearBooks } from '../../store/book-search/actions';
import PaginationComponent from '../Pagination/Pagination';

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(clearBooks());
	}, [dispatch]);

	return (
		<div>
			<SearchBar />
			<BooksListing />
			<PaginationComponent />
		</div>
	);
}
