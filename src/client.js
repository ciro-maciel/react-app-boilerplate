import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import Main from './main';

console.log(window.location.origin);

// https://github.com/facebookincubator/create-react-app/issues/1765
render(
	<BrowserRouter basename={window.location.origin}>
		<Main />
	</BrowserRouter>,
	document.getElementById('container'));