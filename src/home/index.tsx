import React from 'react';
//import { createUseStyles } from 'react-jss';

import Step from './step';
import { Switch } from 'react-router';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Introduction from './introduction';
import Success from '../clues/success';

export default function Home({ match, location }) {
  return (
    <>
      <Router  basename="/">
        <Switch>
          <Route 
            exact={true}
            path={`/`}
            component={Step}
          />
          <Route 
            exact={true}
            path={`/success`}
            component={Success}
          />
          <Route 
            exact={true}
            path={`/:step`}
            component={Step}
          />
          <Route 
            path={`/:domain/:step`}
            component={Step}
          />
        </Switch>
      </Router>
    </>
  );
}