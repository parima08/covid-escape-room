import React from 'react';
import { setStep } from '../redux/actions';
interface NavProps {}

export default function Nav() {
  return (
    <nav className="nav">
      <a href='/introduction'>Introduction</a>
      <a href='/clue1'>Clue 1</a>
      <a>Clue 2</a>
      <a>Clue 3</a>
      <a>Clue 4</a>
      <a>Clue 5</a>
      <a>Clue 6</a>
      <a>Clue 7</a>
      <a>Clue 8</a>
      <a>Clue 9</a>
      <a>Clue 10</a>
    </nav>
  );
}