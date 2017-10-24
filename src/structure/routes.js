import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import XRay from 'react-x-ray'

import { I18nProvider } from '../containers/i18n';
import Home from '../containers/Home';


// https://reacttraining.com/react-router/web/guides/server-rendering/404-401-or-any-other-status
const Status = ({ code, children }) => (
	<Route render={({ staticContext }) => {
		if (staticContext)
			staticContext.status = code
		return children
	}}/>
)

const NotFound = () => (
    <Status code={404}>
		<div>
			<h1>Sorry, can’t find that.</h1>
			<p>go to <Link to={"/"}>Home</Link></p>
		</div>
    </Status>
  )
  
const RoutesSwitch = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/hi" render={()=>(
			<div>
				hi!
			</div>
		)} />
		<Route component={NotFound}/>
	</Switch>
)


const Routes = () =>(
    <I18nProvider>
		{
			(process.env.NODE_ENV !== 'production') ?
				<XRay disabled={false} color={'#e5a87d'} backgroundColor={'#004d84'}>
					<RoutesSwitch />
				</XRay>
			: 
				<RoutesSwitch />
		}
    </I18nProvider>
)

export default Routes;