import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}
	body {
		background: ${props => props.theme.palette.mainBackground};
	}
	a{
		text-decoration: none;
		color: inherit;
	}
	
`;

export default GlobalStyle;
