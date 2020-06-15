import React from 'react';
import PasswordChecker from '../home/PasswordChecker';
import { solutions } from './solutions';


export default function Clue8() {
  const STEP = 8;
  return (
    <section>
      <h1 className="font-fjalla">Orientation and Induction</h1>
      <p className="clue-text">
         After accessing vault no 12, you have finally got your hands
         on the files that have detailed findings about the virus and 
         the cure for it. You are now ready to come back into the present,
         but you need the authorization code to reset the time machine.
         Solve the below message with the help of the video sent to 
         you by the command center.
      </p>
      <img src={require("../img/clue8/clue8.png")} alt='clue8' />
      <video controls={true} src={require('../img/clue8/clue8-video.mp4')} />
      <div className='password-container'>
        <PasswordChecker solution={solutions[STEP]} step={STEP}/>
      </div>
    </section>
  );
}