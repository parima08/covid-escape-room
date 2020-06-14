import React from 'react';
import PasswordChecker from '../home/PasswordChecker';
import { solutions } from './solutions';

interface Step2Props {}

export default function Clue2({
}: Step2Props) {
  const STEP = 2;
  return (
    <section>
      <h1 className="font-fjalla">Clue 2</h1>
      <p>
        Beofre you go ahead, your posture and vission will be assesed by the medical officer
        using ths below sketch.
      </p>
      <p>
        Hint: esolc eno eye, tlit ruoy enohp dna kool ta siht morf eht s'enohp regrahc eloh
      </p>
      <img src={require("../img/clue2/clue2.png")} alt='clue2' />
      <div className='password-container'>
        <PasswordChecker solution={solutions[STEP]} step={STEP}/>
      </div>
    </section>
  );
}
