import React from 'react';
import PasswordChecker from '../home/PasswordChecker';
import { solutions } from './solutions';


interface Step2Props {}

export default function Clue7({
}: Step2Props) {
  const STEP = 7;
  return (
    <section>
      <h1 className="font-fjalla">Orientation and Induction</h1>
      <p className="clue-text">
         You are finally here in Hakone, Japan after you got the lead
         that data about the virus cure can be obtained from this
         institude. But the entry to the lab is restricted. At the 
         entrance, there is a message that you must decode to enter.
         <br/>
         <br/>
         Hint: Take a mirror selfie
      </p>
      <img src={require("../img/clue7/clue7.png")} alt='clue7' />
      <div className='password-container'>
        <PasswordChecker solution={solutions[STEP]} step={STEP}/>
      </div>
    </section>
  );
}