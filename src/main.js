import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import Routes from './structure/routes';
import store from './structure/store';


injectGlobal`
	html,
	body, 
	#container {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}

	html {
		color: #666665;
		font-family: "lucida grande", tahoma, verdana, arial, sans-serif;
		font-size: 12px;
	}
`;

// if (process.env.NODE_ENV === "production" && navigator.onLine) {
if (process.env.NODE_ENV && process.env.NODE_ENV === "production" && 'serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker.register(process.env.PUBLIC_URL + '/worker.js').then(function (registration) {
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}).catch(function (err) {
			console.log('ServiceWorker registration failed: ', err);
		});
	});
}

const Main = () => (
	<Provider store={store}>
		<Routes />
	</Provider>
)

export default Main;