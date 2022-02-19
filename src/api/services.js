import Axios from 'axios';

const api = Axios.create({
	baseURL: 'https://www.googleapis.com/books/',
});

export default api;
