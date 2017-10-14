import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

// import { I18nProvider } from '../containers/i18n';
import Home from '../containers/Home';

// var hashHistory = hashHistory;




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
      </div>
    </Status>
  )
  

const Routes = () =>(
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

export default Routes;