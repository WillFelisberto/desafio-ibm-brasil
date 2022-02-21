import styled from 'styled-components';

export const ContainerRepos = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 100px;

	.autocomplete {
		background-color: #fff;

		width: 500px;

		@media (max-width: 768px) {
			width: 300px;
		}
	}

	input {
		width: 100% !important;
	}

	div,
	form {
		padding: 10px;
		background-color: white;
		border-radius: 5px;
		display: flex;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
`;
