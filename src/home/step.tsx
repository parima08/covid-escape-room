import React from 'react';
import Clue1 from '../clues/clue1';
import Nav from './nav';
import Introduction from './introduction';
import { useSelector } from 'react-redux';
import { stepSelector } from '../redux/selectors';
import GapiApi from '../auth/GapiApi';
import { useCookies } from 'react-cookie';


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
        break;
      case 'clue3':
        break;
      case 'clue4':
        break;
      case 'clue5':
        break;
      case 'clue6':
        break;
      case 'clue7':
        break;
      case 'clue8':
        break;
      case 'clue9':
        break;
      case 'clue10':
        break;
      default: 
        return <Introduction />;
    }
  }

  const [cookies, _, removeCookie] = useCookies(['login']);
  const step = useSelector(stepSelector);
  console.log(step);
  const handleSignOut = () => {
    const cb = () => removeCookie('login');
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