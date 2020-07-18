import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}
	body {
		background: ${props => props.theme.palette.mainBlack};
	}
	a{
		text-decoration: none;
		color: inherit;
	}
	
`;

export default GlobalStyle;
