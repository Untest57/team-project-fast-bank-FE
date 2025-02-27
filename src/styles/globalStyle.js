import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap');
	* {
		box-sizing:border-box;
	}
	h1, h2, h3, h4, h5, h6 {font-weight: 400;}
	html { font-size: 62.5%; }
	body {
		font-size: 1.6rem;
		line-height: 1.25;
		min-height: calc(100vh - 8rem);
		padding:4rem;
		max-width: 640px;
		margin: 0 auto;
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
		font-family: 'Noto Sans KR', sans-serif;
	}
	button {
		background: none; 
		outline: none; 
		border: none; 
		padding: 0; 
		cursor: pointer;
	}
	/* mq */
	@media (max-width:640px) {
		body {padding: 4rem 6.25%;}
	}
`
