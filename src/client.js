import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import Main from './main';

// https://github.com/facebookincubator/create-react-app/issues/1765
render(
	<HashRouter>
		<Main />
	</HashRouter>,
	document.getElementById('container'));