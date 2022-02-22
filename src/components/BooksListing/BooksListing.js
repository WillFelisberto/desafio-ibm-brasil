import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import noThumbnail from '../../assets/no-image-thumb.png';
import { ContainerBookListing } from './styled';
import Button from '@material-ui/core/Button';
import { getStorageValue } from '../hooks/localstorage';
import { FaRegSadCry } from 'react-icons/fa';

export default function BooksListing({ favorites }) {
	let booksListing = useSelector((state) => state.booksSearch.data);
	let termSearched = useSelector((state) => state.term.term);
	const regex = /(<([^>]+)>)/gi;

	if (favorites) {
		const favBooks = getStorageValue('favBooks');

		if (favBooks) {
			booksListing = favBooks;
			termSearched = 'Favoritos';
		}
	}
	return (
		<>
			{booksListing.length > 0 ? (
				<ContainerBookListing>
					<div>
						{favorites ? (
							<h1 className="text-center">Favoritos</h1>
						) : (
							<h1>Resultados para "{termSearched}"</h1>
						)}
						<hr></hr>
						<ul>
							{booksListing.map((book) => (
								<li key={book.id}>
									<section>
										<Link className="bookTitle" to={`/book/${book.id}`}>
											<img
												className="bookThumbnai"
												src={
													book.volumeInfo.imageLinks
														? book.volumeInfo.imageLinks.thumbnail
														: noThumbnail
												}
												alt={book.volumeInfo.title}
											/>
										</Link>
									</section>
									<section className="cardInfo">
										<Link className="bookTitle" to={`/book/${book.id}`}>
											<h2>{book.volumeInfo.title}</h2>
										</Link>
										<p className="textDescription">
											{book.volumeInfo.description
												? book.volumeInfo.description.replace(regex, '')
												: 'Descrição não disponível'}
										</p>
										<Button
											component={Link}
											to={`/book/${book.id}`}
											size="large"
											color="primary"
											variant="contained"
										>
											Detalhes
										</Button>
									</section>
								</li>
							))}
						</ul>
					</div>
				</ContainerBookListing>
			) : favorites && booksListing.length === 0 ? (
				<ContainerBookListing>
					<div className="none-book">
						<h1>Nenhum livro favorito.</h1>
						<h1>
							<FaRegSadCry />
						</h1>
					</div>
				</ContainerBookListing>
			) : null}
		</>
	);
}
