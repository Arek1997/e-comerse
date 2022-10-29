import styled from 'styled-components';

export const Nav = styled.nav`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3em 1.5em;
	color: #fff;
`;

export const UlList = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	padding: 2em 4em;
	color: #000;
	background-color: var(--dirty-white);
	border-radius: 8px;
	transform: translateY(50%);
	opacity: 0;
	visibility: hidden;
	transition: transform 0.3s, opacity 0.3s, visibility 0.3s;
	z-index: 10;

	@media (min-width: 768px) {
		position: static;
		width: auto;
		padding: 0;
		background-color: transparent;
		transform: translateY(0);
		opacity: 1;
		visibility: visible;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		row-gap: 2em;

		@media (min-width: 768px) {
			flex-direction: row;
			row-gap: 0;
			column-gap: 3rem;
		}

		@media (min-width: 992px) {
			column-gap: 6rem;
		}

		li a {
			font-size: 1.8rem;
			color: var(--light-gray);

			@media (min-width: 768px) {
				font-size: 2.2rem;
				color: #fff;
				transition: color 0.3s;

				&:hover {
					color: var(--orange);
				}
			}
		}

		i {
			margin-right: 0.7em;

			@media (min-width: 768px) {
				display: none;
			}
		}
	}

	i.closeMobNav {
		position: absolute;
		top: 1rem;
		right: 2rem;
		font-size: 3rem;
		color: var(--light-gray);
		cursor: pointer;

		@media (min-width: 768px) {
			display: none;
		}
	}
`;

export const BurgerBtn = styled.button`
	padding: 0.2em 0.8em;
	font-size: 2.2rem;
	border-radius: 20px;
	color: #fff;
	background-color: var(--orange);
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: var(--orange-hover);
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

export const Logo = styled.h1`
	font-size: 3rem;
	font-family: cursive;

	@media (min-width: 768px) {
		font-size: 4rem;
	}

	@media (min-width: 992px) {
		position: absolute;
		left: 50%;

		transform: translateX(-50%);
	}
`;

export const Cart = styled.button`
	position: relative;
	background-color: transparent;
	cursor: pointer;

	i {
		position: relative;
		color: #fff;
		font-size: 3rem;

		span {
			position: absolute;
			display: grid;
			top: -15px;
			left: 15px;
			width: 3rem;
			height: 3rem;
			background-color: var(--orange);
			font-size: 1.2rem;
			place-items: center;
			border-radius: 50%;
		}
	}
`;
