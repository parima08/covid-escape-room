import React from 'react';
//import { createUseStyles } from 'react-jss';

import Step from './step';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Introduction from './introduction';

export default function Home({ match, location }) {
  return (
    <>
      <Router>
        <Switch>
          <Route 
            exact={true}
            path={`/`}
            component={Step}
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