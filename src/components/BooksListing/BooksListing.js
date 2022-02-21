import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import noThumbnail from '../../assets/no-image-thumb.png';
import { ContainerBookListing } from './styled';
import Button from '@material-ui/core/Button';

export default function BooksDetails() {
	const booksListing = useSelector((state) => state.booksSearch.data);
	const termSearched = useSelector((state) => state.term.term);

	return (
		<>
			{booksListing.length > 0 ? (
				<ContainerBookListing>
					<div>
						<h1>Resultados para: {termSearched}</h1>
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
											{book.volumeInfo.description ||
												'Descrição não disponível'}
										</p>
										<Button
											size="large"
											href={`/book/${book.id}`}
											color="success"
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
			) : null}
		</>
	);
}
