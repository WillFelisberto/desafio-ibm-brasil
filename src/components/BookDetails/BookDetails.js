import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { loadBookDetail, ClearBook } from '../../store/book/actions';
import Loader from '../common/Loader';
import { ContainerDetails, ContainerImg, ContainerInfos } from './styled';
import Button from '@material-ui/core/Button';
import { FaExternalLinkAlt, FaRegStar, FaStar } from 'react-icons/fa';
import { getStorageValue, setLocalStorage } from '../hooks/localstorage';
import noImg from '../../assets/book-no-image.jpg';

export default function BookDetails() {
	let { id } = useParams();
	const dispatch = useDispatch();
	const bookDetails = useSelector((state) => state.book);
	const [loading, setLoading] = useState(true);
	const [isFav, setIsFav] = useState();
	const [bookDetail, setBookDetails] = useState([]);
	const regex = /(<([^>]+)>)/gi;

	useEffect(() => {
		dispatch(ClearBook());
		dispatch(loadBookDetail(id));
	}, [id, dispatch]);

	useEffect(() => {
		if (bookDetails.loaded && !bookDetails.loading) {
			setBookDetails(bookDetails.data);
			setLoading(false);
		}
	}, [id, dispatch, bookDetails]);

	useEffect(() => {
		const favBooks = getStorageValue('favBooks');

		if (favBooks) {
			const newFavBooks = favBooks.find(
				(element) => element.id === bookDetail.id
			);
			if (newFavBooks) setIsFav(true);
		}
	}, [bookDetail]);

	const handleFav = () => {
		const favBooks = getStorageValue('favBooks');
		if (!isFav) {
			const newFavBooks = favBooks ? [...favBooks, bookDetail] : [bookDetail];
			setLocalStorage('favBooks', newFavBooks);
		}
		setIsFav(true);
	};

	const removeFav = () => {
		const favBooks = getStorageValue('favBooks');
		const newFavBooks = favBooks.filter(
			(element) => element.id !== bookDetail.id
		);
		setLocalStorage('favBooks', newFavBooks);
		setIsFav(false);
	};

	return (
		<ContainerDetails>
			{loading ? (
				<div className="loader">
					<Loader />
				</div>
			) : (
				<>
					<ContainerImg>
						<img
							src={
								bookDetail.volumeInfo.imageLinks &&
								bookDetail.volumeInfo.imageLinks.large
									? bookDetail.volumeInfo.imageLinks.large
									: noImg
							}
							alt={bookDetail.volumeInfo.title}
						/>
					</ContainerImg>
					<ContainerInfos>
						<h1>{bookDetail.volumeInfo.title}</h1>
						<div className="moreInfos">
							<p>
								Publicado por {bookDetail.volumeInfo.publisher} em{' '}
								{bookDetail.volumeInfo.publishedDate}
							</p>
							<p>
								{bookDetail.volumeInfo.pageCount
									? bookDetail.volumeInfo.pageCount + ' páginas'
									: null}{' '}
							</p>
							<p>
								{bookDetail.volumeInfo.description
									? bookDetail.volumeInfo.description.replace(regex, '')
									: 'Descrição não disponível'}
							</p>
							<div className="buttons">
								<Button
									target="_blank"
									href={bookDetail.volumeInfo.previewLink}
									startIcon={<FaExternalLinkAlt />}
									size="large"
									color="primary"
									variant="contained"
								>
									Saiba mais
								</Button>

								{isFav ? (
									<Button
										onClick={(e) => {
											removeFav(e);
										}}
										size="large"
										startIcon={<FaStar />}
										color="secondary"
										variant="contained"
									>
										Remover aos Favoritos
									</Button>
								) : (
									<Button
										onClick={(e) => {
											handleFav(e);
										}}
										size="large"
										startIcon={<FaRegStar />}
										color="default"
										variant="contained"
									>
										Adicionar aos Favoritos
									</Button>
								)}
							</div>
						</div>
					</ContainerInfos>
				</>
			)}
		</ContainerDetails>
	);
}
