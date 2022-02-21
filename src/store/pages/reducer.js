const pagesDefaultState = {
	page: 1,
};

const pages = (state = pagesDefaultState, action) => {
	switch (action.type) {
		case 'SET_PAGE':
			return {
				...state,
				data: action.data,
			};

		default:
			return state;
	}
};

export default pages;
