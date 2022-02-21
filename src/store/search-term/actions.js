export const searchTerm = (term) => {
	return {
		type: 'SET_TERM',
		data: term,
	};
};
