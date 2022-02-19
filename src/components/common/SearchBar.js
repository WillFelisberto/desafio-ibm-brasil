import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import api from '../../api/services';
import { ContainerRepos } from '../home/styled';

export default function SearchBar() {
	const [search, setSearch] = useState('');
	const [myOptions, setMyOptions] = useState([]);
	const getDataFromAPI = (searchTerm) => {
		if (searchTerm.target.value !== '') {
			setSearch(searchTerm.target.value);
		}
	};

	useEffect(() => {
		console.log(search);
		const fetchData = async () => {
			const dataReturn = await api.get(`/v1/volumes?q=${search}&maxResults=5`);
			console.log(dataReturn.data.items);
			var filterOptions = dataReturn.data.items.map((item) => {
				return {
					label: item.volumeInfo.title,
					link: item.volumeInfo.infoLink,
					id: item.id,
				};
			});
			console.log('filterOptions', filterOptions);

			setMyOptions(filterOptions);
		};

		if (search !== '') {
			fetchData();
		}
	}, [search]);

	return (
		<ContainerRepos>
			<div>
				<Autocomplete
					style={{ width: 500, backgroundColor: '#fff' }}
					freeSolo
					autoComplete
					autoHighlight
					getOptionLabel={(option) => option.label}
					options={myOptions}
					renderOption={(option) => (
						<>
							<span
								style={{ cursor: 'pointer' }}
								onClick={() => {
									window.location.href = option.link;
								}}
							>
								{option.label} {option.id}
							</span>
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
			</div>
		</ContainerRepos>
	);
}
