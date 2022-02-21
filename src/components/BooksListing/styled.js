import styled from 'styled-components';

export const ContainerBookListing = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 100px;

	h1 {
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	div {
		width: 70%;
		padding: 10px;
		background-color: white;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
	}
	ul {
		flex-wrap: wrap;
		display: flex;
	}
	ul li {
		flex: 1 0 30%;
		max-height: 400px;
		background-color: white;
		display: flex;
		flex-direction: row;
		padding: 10px;
		max-width: 500px;
	}

	.cardInfo {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.bookTitle {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin: 10px;

		text-decoration: none;
		color: black;
	}
	.textDescription {
		display: -webkit-box;
		-webkit-line-clamp: 7;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin: 10px;
	}

	.bookThumbnai {
		width: 200px;
	}

	@media (max-width: 768px) {
		margin-top: 30px;

		div {
			width: 90%;
		}

		.textDescription {
			-webkit-line-clamp: 5;
		}

		.bookThumbnai {
			width: 100px;
		}

		h1 {
			font-size: 24px;
			font-weight: bold;
			margin-bottom: 20px;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}
`;
