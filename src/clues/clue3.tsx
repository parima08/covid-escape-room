import React from 'react';
import PasswordChecker from '../home/PasswordChecker';
import { solutions } from './solutions';


interface Step2Props {}

export default function Clue3({
}: Step2Props) {
  const STEP = 3
  return (
    <section>
      <h1 className="font-fjalla">Orientation and Induction</h1>
      <p className="clue-text">
        The Defence Lab's Project Director has kept everything ready inside the 
        time machine for you. As you eneter, you notice that below the control panel, there are 10
        switches but not all the switches are turned on. You are told that the on/off 
        pattern of switches represent a binary number. Can you decipher what the 
        binary number is? From there, convert to roman numerals
      </p>
      <img src={require("../img/clue3/clue3.png")} alt='clue1' />
      <div className='password-container'>
        <PasswordChecker solution={solutions[STEP]} step={STEP}/>
      </div>
    </section>
  );
}