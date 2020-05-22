import React from 'react';
import Auth from './auth';
import { useCookies } from 'react-cookie';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Clue1 from './clues/clue1';


const App: React.FC = () => {
  const [cookies] = useCookies(['login']);
  if(!cookies.login){
    return <Auth />
  }

  return (
    <Router>
      <Switch>
        <Route 
          path="/"
          component={Home}
        />
      </Switch>
    </Router>
  );
}

export default App;
