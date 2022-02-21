import Axios from 'axios';

const api = Axios.create({
	baseURL: 'https://www.googleapis.com/books/',
});

export const getBookDetails = async (id) => {
	try {
		const response = await api.get(`/v1/volumes/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const searchBook = async (term, page = 1) => {
	if (page === 1) {
		page = 1;
	} else {
		page = page * 10 - 10;
	}

	try {
		const response = await api.get(
			`v1/volumes?q=${term}&startIndex=${page}&maxResults=9`
		);
		return response.data.items;
	} catch (error) {
		throw error;
	}
};

export default api;
