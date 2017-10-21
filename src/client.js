import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import Main from './main';

console.log(process.env.PUBLIC_URL);

// https://github.com/facebookincubator/create-react-app/issues/1765
render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Main />
	</BrowserRouter>,
	document.getElementById('container'));