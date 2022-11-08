import styled from 'styled-components';

export const StyledProductDetails = styled.section`
	.product {
		padding: 4rem 0;

		@media (min-width: 576px) {
			padding: 6rem 1.5rem;
		}

		@media (min-width: 992px) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 5rem;
		}

		&__img {
			margin-bottom: 3em;

			img {
				width: 100%;
				height: 400px;
				object-fit: cover;

				@media (min-width: 576px) {
					height: auto;
					object-fit: none;
				}
			}
		}

		&__details {
			display: flex;
			flex-direction: column;
			row-gap: 2rem;
			align-items: flex-start;
			justify-content: center;

			@media (min-width: 992px) {
				justify-content: flex-start;
			}
		}

		&__name {
			font-size: 3rem;
			font-weight: 300;
			color: var(--dark-blue);
		}

		&__brand {
			font-size: 1.8rem;
			font-family: cursive;
			font-weight: 700;
			color: var(--light-blue);
			text-transform: uppercase;
			opacity: var(--small-opacity);
		}

		&__price {
			font-size: 2rem;
			font-weight: 700;
			color: var(--dark-blue);
			opacity: var(--small-opacity);
		}

		&__description {
			font-size: 1.4rem;
			color: var(--light-blue);
			line-height: 2;
		}

		&__button {
			&:hover {
				background-color: var(--orange-hover);
			}
		}
	}
`;
