import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../fonts/fonts.css';
const GlobalStyle = createGlobalStyle`
	${reset}
	body {
		font-family: 'InfinitySans-RegularA1', 'Roboto', 'Noto Sans KR', sans-serif;
		background: ${props => props.theme.palette.mainBackground};
	}
	a{
		text-decoration: none;
		color: inherit;
	}
	
`;

export default GlobalStyle;
