import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'Roboto', sans-serif;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
	font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
}
input {
    width: 100%;
    height: 52px;
    background: #ffffff;
	border: none;
    border-radius: 8px;
	padding: 5px;
    &::placeholder {
      font-size: 16px;
      color: #7E7E7E;
    }
	:focus {
        outline: 2px solid #ff47919f;
      }
}
button {
	width: 100%;
	height: 52px;
	background: #FF4791;
	border-radius: 8px;
	color: white;
	border: none;
	font-size: 15px;
	font-weight: 700;
	margin-bottom: 8px;
}
a {
	text-decoration: none;
	color: inherit;
}
`;

export default GlobalStyle;
