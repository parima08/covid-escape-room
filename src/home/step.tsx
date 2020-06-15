import React from 'react';
import Clue1 from '../clues/clue1';
import Clue2 from '../clues/clue2';
import Clue3 from '../clues/clue3';

import Nav from './nav';
import Introduction from './introduction';
import { useSelector } from 'react-redux';
import { stepSelector } from '../redux/selectors';
import GapiApi from '../auth/GapiApi';
import { useCookies } from 'react-cookie';
import Clue4 from '../clues/clue4';
import Clue5 from '../clues/clue5';
import Clue6 from '../clues/clue6';
import Clue7 from '../clues/clue7';
import Clue8 from '../clues/clue8';
import Clue9 from '../clues/clue9';
import Clue10 from '../clues/clue10';


export default function Step({
  match
}: any) {

  console.log('step', match);

  const renderStep = (step) => {
    switch(step){
      case 'introduction':
        return <Introduction/>;
      case 'clue1':
        return <Clue1 />;
      case 'clue2':
        return <Clue2 />
      case 'clue3':
        return <Clue3 />
      case 'clue4':
        return <Clue4 />;
      case 'clue5':
        return <Clue5 />;
      case 'clue6':
        return <Clue6 />;
      case 'clue7':
        return <Clue7 />;
      case 'clue8':
        return <Clue8 />;
      case 'clue9':
        return <Clue9 />;
      case 'clue10':
        return <Clue10 />;;
      default: 
        return <Introduction />;
    }
  }

  const [cookies, _, removeCookie] = useCookies(['login']);
  const step = useSelector(stepSelector);
  console.log(step);
  const handleSignOut = () => {
    const cb = () => {
      removeCookie('login', { path: '/' });
      removeCookie('lastSolvedClue', { path: '/' });
    }
    removeCookie('login', { path: '/' })
    removeCookie('lastSolvedClue', { path: '/' });
    GapiApi.shared.signOut(cb);
  }

  return (
    <div className="App">
      <a className="logout-link" onClick={handleSignOut}>
        Log out
      </a>
      <h1 className="font-fjalla main-title">
        Welcome to the Coronovirus Lab
      </h1>
      <Nav />
      {match.params.step && renderStep(match.params.step.toLowerCase())}
      {!match.params.step && <Introduction />}
  </div>
  );
}