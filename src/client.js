import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import Main from './main';

// https://github.com/facebookincubator/create-react-app/issues/1765
// Zhttps://reacttraining.com/react-router/web/api/HashRouter
render(
	<HashRouter basename={process.env.PUBLIC_URL}>
		<Main />
	</HashRouter>,
	document.getElementById('container'));