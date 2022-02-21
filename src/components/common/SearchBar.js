import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../api/services';
import { ContainerRepos } from './styled';
import { loadBooks } from '../../store/book-search/actions';
import { searchTerm } from '../../store/search-term/actions';

export default function SearchBar() {
	const [search, setSearch] = useState('');
	const [myOptions, setMyOptions] = useState([]);
	const page = useSelector((state) => state.pages.page);

	const dispatch = useDispatch();

	const getDataFromAPI = (searchTerm) => {
		if (searchTerm.target.value !== '') {
			setSearch(searchTerm.target.value);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const dataReturn = await api.get(`/v1/volumes?q=${search}&maxResults=5`);
			var filterOptions = dataReturn.data.items.map((item) => {
				return {
					label: item.volumeInfo.title,
					link: item.volumeInfo.infoLink,
					id: item.id,
				};
			});

			setMyOptions(filterOptions);
		};

		if (search !== '') {
			fetchData();
		}
	}, [search]);

	const onFormSubmit = (event) => {
		event.preventDefault();
		dispatch(loadBooks(search, page));
		dispatch(searchTerm(search));
	};

	return (
		<ContainerRepos>
			<div>
				<form onSubmit={onFormSubmit}>
					<Autocomplete
						className="autocomplete"
						freeSolo
						autoHighlight
						getOptionLabel={(option) => option.label || ''}
						options={myOptions}
						renderOption={(option) => (
							<>
								<Link
									style={{ textDecoration: 'none', color: '#000' }}
									title={option.label}
									to={`/book/` + option.id}
								>
									<span style={{ cursor: 'pointer' }}>{option.label}</span>
								</Link>
							</>
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								onChange={getDataFromAPI}
								variant="outlined"
								label="Pesquise pelo nome do livro"
							/>
						)}
					/>
					<div style={{ padding: '3% 0px' }}>
						<Button
							type="submit"
							startIcon={<FaSearch />}
							size="medium"
							onClick={(e) => {
								onFormSubmit(e);
							}}
							variant="contained"
						>
							Pesquisar
						</Button>
					</div>
				</form>
			</div>
		</ContainerRepos>
	);
}
