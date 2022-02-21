const termDefaultState = {
	term: '',
};

const term = (state = termDefaultState, action) => {
	switch (action.type) {
		case 'SET_TERM':
			return {
				...state,
				term: action.data,
			};

		default:
			return state;
	}
};

export default term;
