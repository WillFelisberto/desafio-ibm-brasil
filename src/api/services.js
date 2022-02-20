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

export default api;
