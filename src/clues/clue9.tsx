import React from 'react';
import PasswordChecker from '../home/PasswordChecker';
import { solutions } from './solutions';


interface Step2Props {}

export default function Clue9({
}: Step2Props) {
  const STEP = 9
  return (
    <section>
      <h1 className="font-fjalla">Clue 9</h1>
      <p className="clue-text">
        You have come thus far and now make a plan and choose where to go.
        Identify the below institues where you could find clues about
        the cure that you are looking for. 
      </p>
      <div className='clue5-container'>
        <div className="clue5-img">
            <img src={require("../img/clue9/clue9-1.png")} alt='clue51' />
        </div>
        <div className="clue5-img">
            <img src={require("../img/clue9/clue9-2.png")} alt='clue52' />
        </div>
        <div className="clue5-img">
            <img src={require("../img/clue9/clue9-3.png")} alt='clue53' />
        </div>
      </div>
      <div className='password-container'>
        <PasswordChecker solution={solutions[STEP]} step={STEP}/>
      </div>
    </section>
  );
}