import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './structure/routes';
import store from './structure/store';

const Main = () => (
	<Provider store={store}>
		<Routes store={store}/>
	</Provider>
)

export default Main;