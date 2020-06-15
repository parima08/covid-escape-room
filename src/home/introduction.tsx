import React from 'react';
import { Link } from "react-router-dom";


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
        <Link className='font-fjalla' to='/clue1'>
          Go to Clue 1 ->
        </Link>
      </div>
    </section>
  );
}