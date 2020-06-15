import React from 'react';
import PasswordChecker from '../home/PasswordChecker';
import { solutions } from './solutions';


interface Step2Props {}

export default function Clue10({
}: Step2Props) {
  const STEP = 10;
  return (
    <section>
      <h1 className="font-fjalla">Orientation and Induction</h1>
      <p className="clue-text">
        Eventually, reearchers understood the missing ingredient that
        were needed to be added to the drugs clinically. Once you find
        their names, you need to go find these at home and mix all 4 
        together. 
      </p>
      <img src={require("../img/clue10/clue10.png")} alt='clue7' />
      <div className='password-container'>
        <PasswordChecker solution={solutions[STEP]} step={STEP}/>
      </div>
    </section>
  );
}