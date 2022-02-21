const pagesDefaultState = {
	page: 1,
};

const pages = (state = pagesDefaultState, action) => {
	console.log('state', state, action);
	switch (action.type) {
		case 'SET_PAGE':
			return {
				...state,
				page: action.page,
			};

		default:
			return state;
	}
};

export default pages;
