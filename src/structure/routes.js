import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import XRay from 'react-x-ray'

import { Flex, Box } from 'grid-styled';

import { I18nProvider } from '../containers/i18n';
import Home from '../containers/Home';
import Users from '../containers/Users';


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
        <Flex justify='center' style={{ height: '100%' }}>
            <Flex wrap width={1024}>
                <Box width={1} style={{ textAlign:'center'}}>
                    <h1>Sorry, can’t find that.</h1>
                    <p>Go to <Link to={"/"}>Home</Link></p>
                </Box>
            </Flex>
        </Flex>
    </Status>
  )
  
const RoutesSwitch = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/users" component={Users} />
		<Route exact path="/repository/:repositoryName" render={()=>(
			<div>
				{props.match.params.repositoryName}
			</div>
		)} />
		<Route component={NotFound}/>
	</Switch>
)


const Routes = () =>(
    <I18nProvider>
		{
			(process.env.NODE_ENV && process.env.NODE_ENV !== 'production') ?
				<XRay disabled={true} color={'#e5a87d'} backgroundColor={'#004d84'} style={{ height: '100%' }} >
					<RoutesSwitch />
				</XRay>
			: 
				<RoutesSwitch />
		}
    </I18nProvider>
)

export default Routes;