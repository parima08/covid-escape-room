import React from 'react';
import PasswordChecker from '../home/PasswordChecker';
import { solutions } from './solutions';


interface Step2Props {}

export default function Clue4({
}: Step2Props) {
  const STEP = 4
  return (
    <section>
      <h1 className="font-fjalla">Orientation and Induction</h1>
      <p className="clue-text">
        You enter the time machine and are on your way to
        the future. Then, you hear some voice on your reciever and
        it seems to be an alien language. What language
        is this? Or is it some kind of codeword?
        <br />
        <br />
        Hint: yalp oidua ni esrever
      </p>
      <audio controls={true} src={require("../img/clue4/clue4.mp3")}/>
      <div className='password-container'>
        <PasswordChecker solution={solutions[STEP]} step={STEP}/>
      </div>
    </section>
  );
}