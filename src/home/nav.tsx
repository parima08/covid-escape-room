import React from 'react';
import {useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setStep } from '../redux/actions';
import { setLastSolvedClueSelector } from '../redux/selectors';
import mountLockedModal from '../components/mountLockedWarning';
import { useCookies } from 'react-cookie';
import {Link } from "react-router-dom";

interface NavProps {}

export default function Nav() {
  const CLUES = 10; 
  const clueIndexes = Array.from(Array(CLUES).keys());
  const [cookies, setCookie, removeCookie] = useCookies(['lastSolvedClue']);
  const lastSolvedClue = cookies['lastSolvedClue'];// || useSelector(setLastSolvedClueSelector);
  console.log('lastSolvedClue', lastSolvedClue);
  const lockIcon = (<img src={require("../img/icons/lock.svg")}/>);
  const unlockIcon = (<img src={require("../img/icons/unlock.svg")}/>);
  const { history } = useHistory();

  
  const isUnlocked = (num) => num <= lastSolvedClue;

  const handleClick = (e, index) => {
    if(!isUnlocked(index)){
      mountLockedModal({});
    }
  }
  return (
    <nav className="nav">
      <Link to='/introduction'>Introduction</Link>
      {
        clueIndexes.map( (num) => {
          const index = num + 1;
         const icon = isUnlocked(index) ? 
          unlockIcon :
          lockIcon; 
        const link = isUnlocked(index) ? 
          `/clue${index}` : 
          '';
         return( 
          <Link key={`clue${num}`} to={link} className='nav-link-container' onClick={e => handleClick(e, index)}>
           <div className="nav-icon">
              {icon}
           </div>
           Clue {index}
          </Link>
        )
        }) 
      }
    </nav>
  );
}