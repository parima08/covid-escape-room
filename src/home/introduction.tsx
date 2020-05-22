import React from 'react';
import { setStep } from '../redux/actions';
interface IntroductionProps {}

export default function Introduction({
}: IntroductionProps) {
  return (
    <section className="section--hero">
      <div className="flex_child--horizontal">
        <h1 className="font-fjalla">
          Introduction
        </h1>
        <p>
          This escape room is used to raise funds for SR Love and Care.
        </p>
        <a className='font-fjalla' href='/clue1'>
          Go to Clue 1 ->
        </a>
      </div>
    </section>
  );
}