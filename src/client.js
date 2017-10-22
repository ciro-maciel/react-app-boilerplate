import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import Main from './main';


if (process.env.NODE_ENV === "production" && navigator.onLine) {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', function () {
			// in directory /assets/js/
			navigator.serviceWorker.register('../../worker.js').then(function (registration) {
				console.log('ServiceWorker registration successful with scope: ', registration.scope);
			}).catch(function (err) {
				console.log('ServiceWorker registration failed: ', err);
			});
		});
	}
}

// https://github.com/facebookincubator/create-react-app/issues/1765
// https://reacttraining.com/react-router/web/api/HashRouter
render(
	<HashRouter basename={process.env.PUBLIC_URL}>
		<Main />
	</HashRouter>,
	document.getElementById('container'));