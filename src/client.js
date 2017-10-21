import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import Main from './main';

render(
	<HashRouter>
		<Main />
	</HashRouter>,
	document.getElementById('container'));