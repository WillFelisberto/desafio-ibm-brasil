import styled from 'styled-components';

export const ContainerImg = styled.div`
	display: flex;
	flex-grow: 1;
	text-align: center;
	justify-content: space-around;
	img {
		max-width: 100%;
		width: 100%;
		object-fit: cover;
	}

	width: 30%;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ContainerDetails = styled.div`
	margin: 50px 15%;
	min-height: calc(86vh - 68px);
	display: flex;
	box-shadow: inset 0 0 2000px rgb(255 255 255 / 0.19%), 0 0 1em #000000b8;
	@media (max-width: 768px) {
		flex-direction: column;
		margin: 50px 5%;
	}

	.loader {
		display: flex;
		width: 100%;
		place-content: center;
		align-self: center;
	}
`;

export const ContainerInfos = styled.section`
	display: flex;
	width: 60%;
	background-color: black;
	flex-direction: column;
	padding: 20px;
	color: white;
	justify-content: space-between;

	@media (max-width: 768px) {
		width: 100%;
	}
	background-color: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(5px);

	.moreInfos {
		padding-bottom: 30%;
	}

	.buttons {
		display: flex;
		justify-content: space-around;

		@media (max-width: 768px) {
			padding-top: 0px;
			width: 100%;
			flex-direction: column;

			button {
				margin-top: 20px;
			}
		}
	}

	h1 {
		font-size: 2em;
		font-weight: bold;
		margin-bottom: 1em;
		text-shadow: 0px 1px 5px #000000;
	}

	p {
		padding: 10px 0px;
		text-shadow: 0px 0px 10px #000000;
		font-size: 16px;
	}

	button {
		font-weight: bold;
	}
`;
