import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}
	@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

	body {
		background: ${props => props.theme.palette.mainBlack};
		font-family: 'Nanum Gothic', sans-serif;	}
	a{
		text-decoration: none;
		color: inherit;
	}
	
`;

export default GlobalStyle;
