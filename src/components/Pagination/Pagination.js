import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { definePage } from '../../store/pages/actions';
import { clearBooks, loadBooks } from '../../store/book-search/actions';
import { ContainerCenter } from '../common/styled';
import { ContainerPagination } from './styled';
import Loader from '../common/Loader';

export default function PaginationComponent() {
	const booksListing = useSelector((state) => state.booksSearch);
	const atualPage = useSelector((state) => state.pages.page);
	const searchedTerm = useSelector((state) => state.term.term);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(atualPage);

	const handleChange = (event, value) => {
		setPage(value);
		dispatch(definePage(value));
		dispatch(clearBooks());
		dispatch(loadBooks(searchedTerm, value));
	};

	useEffect(() => {
		if (booksListing.loaded && !booksListing.loading) {
			setLoading(false);
		} else if (
			!booksListing.loaded &&
			!booksListing.loading &&
			!booksListing.error
		) {
			setLoading(false);
		}
	}, [booksListing]);

	return (
		<ContainerCenter>
			{loading ? (
				<div className="loader">
					<Loader />
				</div>
			) : (
				<>
					{booksListing.data.length > 0 && (
						<ContainerPagination>
							<Pagination
								color="primary"
								count={10}
								page={page}
								variant="outlined"
								shape="rounded"
								onChange={handleChange}
							/>
						</ContainerPagination>
					)}
				</>
			)}
		</ContainerCenter>
	);
}
