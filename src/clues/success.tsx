import React from 'react';
import PasswordChecker from '../home/PasswordChecker';
import { solutions } from './solutions';


interface Step2Props {}

export default function Success({
}: Step2Props) {
  const STEP = 10;
  return (
    <section>
      <h1 className="font-fjalla">Success!</h1>
    </section>
  );
}